'use client'

import { useState, useCallback, useEffect } from 'react'
import { Minus, Square, X } from 'lucide-react'



interface WindowProps {
  id: string
  title: string
  children: React.ReactNode
  position: { x: number; y: number }
  onPositionChange: (position: { x: number; y: number }) => void
  onClose: () => void
  icon?: string
}

export function Window({ id, title, children, position, onPositionChange, onClose, icon }: WindowProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const handleStart = useCallback((clientX: number, clientY: number) => {
    setIsDragging(true)
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y,
    })
  }, [position])

  const handleMove = useCallback((clientX: number, clientY: number) => {
    if (isDragging) {
      const newX = Math.max(0, Math.min(clientX - dragStart.x, windowSize.width - 250))
      const newY = Math.max(0, Math.min(clientY - dragStart.y, windowSize.height - 100))
      onPositionChange({ x: newX, y: newY })
    }
  }, [isDragging, dragStart, onPositionChange, windowSize])

  const handleEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    handleStart(e.clientX, e.clientY)
  }, [handleStart])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    handleMove(e.clientX, e.clientY)
  }, [handleMove])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    handleStart(touch.clientX, touch.clientY)
  }, [handleStart])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    handleMove(touch.clientX, touch.clientY)
  }, [handleMove])

  return (
    <div
      className="fixed min-w-[250px] max-w-[95vw] rounded-sm"
      style={{
        left: position.x,
        top: position.y,
        backgroundColor: '#C0C0C0',
        boxShadow: `
          inset -1px -1px 0 #000000,
          inset 1px 1px 0 #FFFFFF,
          inset -2px -2px 0 #808080,
          inset 2px 2px 0 #C0C0C0,
          2px 2px 4px rgba(0,0,0,0.5)
        `
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      <div
        className="flex items-center h-[20px] cursor-move px-1 touch-none"
        style={{
          background: 'linear-gradient(90deg, #000080 0%, #1084d0 100%)',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {icon && (
          <img src={icon} alt="" className="w-4 h-4 mr-1" />
        )}
        <span className="flex-1 text-sm text-white font-bold truncate">{title}</span>
        <div className="flex gap-1">
          <button className="w-4 h-4 flex items-center justify-center hover:bg-blue-700">
            <Minus className="w-3 h-3 text-white" />
          </button>
          <button className="w-4 h-4 flex items-center justify-center hover:bg-blue-700">
            <Square className="w-3 h-3 text-white" />
          </button>
          <button className="w-4 h-4 flex items-center justify-center hover:bg-blue-700" onClick={onClose}>
            <X className="w-3 h-3 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4 overflow-auto max-h-[80vh]">{children}</div>
    </div>
  )
}

