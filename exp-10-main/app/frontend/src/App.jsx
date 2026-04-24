import React, { useEffect, useRef, useState } from 'react'
import SockJS from 'sockjs-client'
import { Client } from '@stomp/stompjs'
import MessageList from './Components/MessageList'
import MessageInput from './Components/MessageInput'
import './App.css'

const SOCKET_URL = 'http://localhost:8080/ws'

export default function App() {
  const [messages, setMessages] = useState([])
  const [name, setName] = useState(() => localStorage.getItem('chatName') || '')
  const [pendingName, setPendingName] = useState(name)
  const [connected, setConnected] = useState(false)
  const stompRef = useRef(null)
  const pendingJoinRef = useRef(false)

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS(SOCKET_URL),
      reconnectDelay: 5000,
      onConnect: () => {
        setConnected(true)
        client.subscribe('/topic/public', (msg) => {
          try {
            const body = JSON.parse(msg.body)
            setMessages(prev => [...prev, body])
          } catch (e) {
            // ignore
          }
        })
        if (pendingJoinRef.current && pendingName) {
          const joinMsg = { from: pendingName, content: `${pendingName} joined`, type: 'JOIN' }
          client.publish({ destination: '/app/chat.sendMessage', body: JSON.stringify(joinMsg) })
          pendingJoinRef.current = false
        }
      },
      onStompError: (frame) => console.error('STOMP error', frame),
      onDisconnect: () => setConnected(false)
    })

    client.activate()
    stompRef.current = client
    return () => client.deactivate()
  }, [])

  useEffect(() => {
    fetch('/api/messages')
      .then(r => { if (!r.ok) throw new Error('no-history'); return r.json() })
      .then(data => setMessages(data))
      .catch(() => {})
  }, [])

  const join = () => {
    if (!pendingName) return
    localStorage.setItem('chatName', pendingName)
    setName(pendingName)
    if (stompRef.current && stompRef.current.connected) {
      const joinMsg = { from: pendingName, content: `${pendingName} joined`, type: 'JOIN' }
      stompRef.current.publish({ destination: '/app/chat.sendMessage', body: JSON.stringify(joinMsg) })
    } else {
      pendingJoinRef.current = true
    }
  }

  const leave = () => {
    if (name && stompRef.current && stompRef.current.connected) {
      const leaveMsg = { from: name, content: `${name} left`, type: 'LEAVE' }
      stompRef.current.publish({ destination: '/app/chat.sendMessage', body: JSON.stringify(leaveMsg) })
    }
    setName('')
    localStorage.removeItem('chatName')
  }

  const sendMessage = (text) => {
    if (!name) return
    if (!stompRef.current || !stompRef.current.connected) return
    const msg = { from: name, content: text, type: 'CHAT' }
    stompRef.current.publish({ destination: '/app/chat.sendMessage', body: JSON.stringify(msg) })
  }

  const clearLocal = () => setMessages([])

  return (
    <div className="chat-center">
      <h1>WebSocket Chat</h1>
      <div className="chat-card">
        <div className="name-row">
          <input className="name-input" placeholder="Name" value={pendingName} onChange={e => setPendingName(e.target.value)} />
          {name ? <button className="small-btn" onClick={leave}>Leave</button> : <button className="small-btn" onClick={join}>Join</button>}
        </div>

        <div className="chat-window">
          <MessageList messages={messages} currentUser={name} />
        </div>

        <div className="controls-row">
          <MessageInput onSend={sendMessage} disabled={!name || !connected} />
          <button className="tiny secondary" onClick={clearLocal}>Clear</button>
        </div>
      </div>
    </div>
  )

}
