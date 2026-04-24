import React, { useState } from 'react'

export default function MessageInput({ onSend, disabled }) {
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    const t = text.trim()
    if (!t) return
    onSend(t)
    setText('')
  }

  return (
    <form className="message-input" onSubmit={submit}>
      <input
        className="message-field"
        placeholder={disabled ? 'Join the chat to send messages' : 'Type your message...'}
        value={text}
        onChange={e => setText(e.target.value)}
        disabled={disabled}
      />
      <button className="send-btn" type="submit" disabled={disabled || !text.trim()}>Send</button>
    </form>
  )
}
