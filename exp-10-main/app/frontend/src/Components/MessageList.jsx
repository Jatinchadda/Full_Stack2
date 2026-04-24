
import React, { useEffect, useRef } from 'react'

export default function MessageList({ messages = [], currentUser }) {
  const endRef = useRef(null)

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages])

  return (
    <div className="message-list-compact">
      {messages.map((m, i) => {
        if (!m) return null
        if (m.type === 'JOIN') return <div key={i} className="note">{m.from} joined the chat</div>
        if (m.type === 'LEAVE') return <div key={i} className="note muted">{m.from} left the chat</div>

        const mine = currentUser && m.from === currentUser
        return (
          <div key={i} className={`chat-line ${mine ? 'mine' : ''}`}>
            <strong className="sender" style={{ color: !mine ? stringToColor(m.from) : undefined }}>{m.from}:</strong>
            <span className="text"> {m.content}</span>
          </div>
        )
      })}
      <div ref={endRef} />
    </div>
  )
}

function stringToColor(str) {
  if (!str) return '#999'
  let hash = 0
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash)
  const h = Math.abs(hash) % 360
  return `hsl(${h} 70% 60%)`
}
