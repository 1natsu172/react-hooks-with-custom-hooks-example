import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

export function useCursor() {
  const [cursor, updateCursor] = useState({ x: 0, y: 0 })

  const handleMouseMove = event => {
    updateCursor(prev => ({ ...prev, x: event.pageX, y: event.pageY }))
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: false })
  }, [])

  return cursor
}
