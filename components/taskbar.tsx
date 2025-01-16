'use client'

import Image from 'next/image'
import { Button } from './button'

interface TaskbarProps {
  windows: Array<{
    id: string
    title: string
    isOpen: boolean
  }>
  onWindowClick: (id: string) => void
}

export function Taskbar({ windows, onWindowClick }: TaskbarProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[40px] flex items-center gap-1 px-2 z-50"
      style={{
        backgroundColor: '#C0C0C0',
        boxShadow: 'inset -1px -1px 0 #FFFFFF, inset 1px 1px 0 #808080'
      }}
    >
      <button
        className="h-[36px] w-[36px] p-1 rounded-none"
        style={{
          backgroundColor: '#C0C0C0',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF'
        }}
      >
        <div className="w-full h-full relative">
          <Image
            src="favicon_rt.png"
            alt="Windows 95 Logo"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      </button>
      <div className="w-px h-[70%] bg-gray-600 mx-1" />
      {windows.map((window) => (
        <Button
          key={window.id}
          onClick={() => onWindowClick(window.id)}
          className={`h-[36px] min-w-[100px] flex items-center gap-2 ${
            window.isOpen ? 'border-inset bg-[#808080]' : ''
          }`}
        >
          <span className="truncate">{window.title}</span>
        </Button>
      ))}
    </div>
  )
}

