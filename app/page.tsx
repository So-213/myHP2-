'use client'

import { Window } from '@/components/window'
import { Taskbar } from '@/components/taskbar'
import { WindowProvider, useWindows } from '@/components/window-provider'

import WelcomeContent from '@/components/windows/WelcomeContent'
import AboutMeContent from '@/components/windows/AboutMeContent'
import ProjectsContent from '@/components/windows/ProjectsContent'
import SnsContent from '@/components/windows/SnsContent'
import LearnigHistory from '@/components/windows/LearningHistory'
import HaikuContent from '@/components/windows/HaikuContent'
import HaikuKaiContent from '@/components/windows/HaikuKaiContent'
import ZaoralContent from '@/components/windows/ZaoralContent'



function WindowManager() {
  const { windows, toggleWindow, updatePosition } = useWindows()

  return (
    <>
      {windows.map((window) => window.isOpen && (
        <Window
          key={window.id}
          id={window.id}
          title={window.title}
          position={window.position}
          onPositionChange={(position) => updatePosition(window.id, position)}
          onClose={() => toggleWindow(window.id)}
          icon="favicon.webp"
        >
          {window.id === 'about' && <WelcomeContent />}
          {window.id === 'about me' && <AboutMeContent />}
          {window.id === 'projects' && <ProjectsContent />}
          {window.id === 'contact' && <SnsContent />}
          {window.id === 'learning history' && <LearnigHistory />}
          {window.id === 'haiku' && <HaikuContent />}
          {window.id === 'haikuKai' && <HaikuKaiContent />}
          {window.id === 'zaoral' && <ZaoralContent />}
        </Window>
      ))}
      <Taskbar windows={windows} onWindowClick={toggleWindow} />
    </>
  )
}

export default function Home() {
  return (
    <WindowProvider>
      <main className="min-h-screen bg-[#008080] p-4">
        <WindowManager/>
      </main>
    </WindowProvider>
  )
}
