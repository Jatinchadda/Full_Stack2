import React, { useEffect, useRef } from 'react'

export default function MessageList({ messages = [], currentUser }) {
  const endRef = useRef(null)

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages])

  return (
    <div className="message-list">
      {messages.map((m, i) => {
        if (!m) return null
        if (m.type === 'JOIN') return <div key={i} className="msg-join">{m.from} joined the chat</div>
        if (m.type === 'LEAVE') return <div key={i} className="msg-join muted">{m.from} left the chat</div>

        const mine = currentUser && m.from === currentUser
        return (
          <div key={i} className={`message-row ${mine ? 'mine' : ''}`}>
            {!mine && <div className="avatar-small" style={{ background: stringToColor(m.from) }}>{m.from ? m.from.charAt(0).toUpperCase() : '?'}</div>}

            <div className={`bubble ${mine ? 'bubble-mine' : ''}`} style={!mine ? { borderColor: stringToColor(m.from) } : {}}>
              {!mine && <div className="sender">{m.from}</div>}
              <div className="content">{m.content}</div>
            </div>

            {mine && <div className="avatar-small mine">{m.from ? m.from.charAt(0).toUpperCase() : '?'}</div>}
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
