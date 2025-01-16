'use client'

import { Window } from '@/components/window'
import { Taskbar } from '@/components/taskbar'
import { WindowProvider, useWindows } from '@/components/window-provider'
import { SocialIcons } from '@/components/social-icons'

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

          {window.id === 'about' && (
            <div className="space-y-4">
              <h1 className="text-xl font-bold">Welcome to my Homepage!!</h1>
              <p>This is a retro-styled HP.</p>
            </div>
          )}

          {window.id === 'projects' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold">My Projects</h2>
              <div className="grid gap-2">
                {['Project 1', 'Project 2', 'Project 3'].map((project) => (
                  <div
                    key={project}
                    className="p-2"
                    style={{
                      backgroundColor: '#FFFFFF',
                      boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF'
                    }}
                  >
                    {project}
                  </div>
                ))}
              </div>
            </div>
          )}

          {window.id === 'contact' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold">My social media accounts.</h2>
              <div className="mt-8">
                <SocialIcons />
              </div>


              {/* <div className="grid gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2"
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF'
                  }}
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-2"
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #FFFFFF'
                  }}
                />
                <button
                  className="px-4 py-2 text-white"
                  style={{
                    background: 'linear-gradient(90deg, #000080 0%, #1084d0 100%)',
                    boxShadow: 'inset -1px -1px 0 #000000, inset 1px 1px 0 #FFFFFF'
                  }}
                >
                  Send Message
                </button>
              </div> */}


            </div>
          )}
          
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
        <WindowManager />
      </main>
    </WindowProvider>
  )
}

