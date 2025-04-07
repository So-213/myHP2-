'use client'

import { useState, useCallback } from 'react'
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

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }, [position])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      onPositionChange({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }, [isDragging, dragStart, onPositionChange])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  return (
    <div
      className="fixed min-w-[250px] rounded-sm"
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
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="flex items-center h-[20px] cursor-move px-1"
        style={{
          background: 'linear-gradient(90deg, #000080 0%, #1084d0 100%)',
        }}
        onMouseDown={handleMouseDown}
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
      <div className="p-4">{children}</div>
    </div>
  )
}

