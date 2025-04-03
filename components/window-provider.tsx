'use client'

import { createContext, useContext, useState, useCallback } from 'react'

type Window = {
  id: string
  title: string
  isOpen: boolean
  position: { x: number; y: number }
  showInTaskbar?: boolean
}

type WindowContextType = {
  windows: Window[]
  toggleWindow: (id: string) => void
  updatePosition: (id: string, position: { x: number; y: number }) => void
  addWindow: (window: Window) => void
  removeWindow: (id: string) => void
}

const WindowContext = createContext<WindowContextType | null>(null)

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Window[]>([
    { id: 'about', title: 'Welcome', isOpen: true, position: { x: 20, y: 20 }, showInTaskbar: true },
    { id: 'about me', title: 'About me', isOpen: false, position: { x: 100, y: 170 }, showInTaskbar: true },
    { id: 'contact', title: '　SNS', isOpen: false, position: { x: 500, y: 100 }, showInTaskbar: true },
    { id: 'projects', title: 'Projects', isOpen: false, position: { x: 580, y: 380 }, showInTaskbar: true },
    { id: 'learning history', title: 'Learning history', isOpen: false, position: { x: 1100, y: 50 }, showInTaskbar: true },
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

  const addWindow = useCallback((window: Window) => {
    setWindows(prev => {
      if (prev.some(w => w.id === window.id)) return prev;
      return [...prev, window];
    });
  }, []);

  const removeWindow = useCallback((id: string) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  return (
    <WindowContext.Provider value={{ windows, toggleWindow, updatePosition, addWindow, removeWindow }}>
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

