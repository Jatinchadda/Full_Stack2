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
  const [connected, setConnected] = useState(false)
  const [pendingName, setPendingName] = useState('')
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
            console.error('Invalid message', e)
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

  // Try to load history from backend (optional)
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
    <div className="app-root">
      <aside className="sidebar">
        <h1>TiraTalk</h1>
        <p className="muted">Real-time chat demo</p>

        {name ? (
          <div className="user-box">
            <div className="avatar" style={{ background: `linear-gradient(135deg, ${stringToColor(name)}, ${shadeColor(stringToColor(name), -20)})` }}>{name.charAt(0).toUpperCase()}</div>
            <div className="user-meta">
              <div className="user-name">{name}</div>
              <div className="user-status">{connected ? 'Connected' : 'Offline'}</div>
            </div>
            <button className="link" onClick={leave}>Leave</button>
          </div>
        ) : (
          <div className="join-box">
            <input className="name-input" placeholder="Enter your display name" value={pendingName} onChange={e => setPendingName(e.target.value)} />
            <button onClick={join} className="primary">Join</button>
          </div>
        )}

        <div className="sidebar-actions">
          <button onClick={clearLocal} className="secondary">Clear local chat</button>
        </div>

        <footer className="sidebar-foot muted">Backend: {connected ? 'online' : 'offline'}</footer>
      </aside>

      <main className="main">
        <MessageList messages={messages} currentUser={name} />
        <MessageInput onSend={sendMessage} disabled={!name || !connected} />
      </main>
    </div>
  )
}

// Helpers
function stringToColor(str) {
  if (!str) return '#888'
  let hash = 0
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash)
  const h = Math.abs(hash) % 360
  return `hsl(${h} 70% 60%)`
}

function shadeColor(hsl, percent) {
  // expecting hsl string like 'hsl(H S% L%)'
  try {
    const parts = hsl.replace(/[hsl()%]/g, '').trim().split(/\s+/)
    const h = parts[0]
    const s = parts[1]
    let l = parseFloat(parts[2])
    l = Math.max(0, Math.min(100, l + percent))
    return `hsl(${h} ${s}% ${l}%)`
  } catch (e) {
    return hsl
  }
}
