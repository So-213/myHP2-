'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type Window = {
  id: string
  title: string
  isOpen: boolean
  position: { x: number; y: number }
}

type WindowContextType = {
  windows: Window[]
  toggleWindow: (id: string) => void
  updatePosition: (id: string, position: { x: number; y: number }) => void
}

const WindowContext = createContext<WindowContextType | null>(null)

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Window[]>([
    { id: 'about', title: 'Welcome', isOpen: true, position: { x: 20, y: 20 } },
    { id: 'about me', title: 'About me', isOpen: false, position: { x: 100, y: 170 } },
    { id: 'contact', title: '　SNS', isOpen: false, position: { x: 500, y: 100 } },
    { id: 'projects', title: 'Projects', isOpen: false, position: { x: 580, y: 380 } },
    { id: 'learning history', title: 'Learning history', isOpen: false, position: { x: 1100, y: 50 } },
    { id: 'haiku', title: '俳句/短歌のAIサイト', isOpen: false, position: { x: 800, y: 20 } },
  ])

  const toggleWindow = useCallback((id: string) => {
    setWindows(prev => 
      prev.map(w => w.id === id ? { ...w, isOpen: !w.isOpen } : w)
    )
  }, [])

  const updatePosition = useCallback((id: string, position: { x: number; y: number }) => {
    setWindows(prev =>
      prev.map(w => w.id === id ? { ...w, position } : w)
    )
  }, [])

  return (
    <WindowContext.Provider value={{ windows, toggleWindow, updatePosition }}>
      {children}
    </WindowContext.Provider>
  )
}

export function useWindows() {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('useWindows must be used within a WindowProvider')
  }
  return context
}

