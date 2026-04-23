import React, { useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'
import { Client } from '@stomp/stompjs'

const SOCKET_URL = 'http://localhost:8080/ws'

export default function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const stompRef = useRef(null)

  useEffect(() => {
    const stompClient = new Client({
      webSocketFactory: () => new SockJS(SOCKET_URL),
      reconnectDelay: 5000,
      onConnect: () => {
        stompClient.subscribe('/topic/public', (msg) => {
          try {
            const body = JSON.parse(msg.body)
            setMessages(prev => [...prev, body])
          } catch(e) {
            console.error('Invalid message', e)
          }
        })
      },
      onStompError: (frame) => {
        console.error('STOMP error', frame)
      }
    })

    stompClient.activate()
    stompRef.current = stompClient
    return () => stompClient.deactivate()
  }, [])

  const send = () => {
    if (!stompRef.current || !stompRef.current.connected) return
    const msg = { from: 'User', content: input, type: 'CHAT' }
    stompRef.current.publish({ destination: '/app/chat.sendMessage', body: JSON.stringify(msg) })
    setInput('')
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>WebSocket Chat</h2>
      <div style={{ height: 300, border: '1px solid #ccc', padding: 10, overflow: 'auto' }}>
        {messages.map((m, i) => (
          <div key={i}><strong>{m.from}</strong>: {m.content}</div>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={send}>Send</button>
      </div>
    </div>
  )
}
