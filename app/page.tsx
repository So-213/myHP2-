'use client'

import { Window } from '@/components/window'
import { Taskbar } from '@/components/taskbar'
import { WindowProvider, useWindows } from '@/components/window-provider'
import { SocialIcons } from '@/components/social-icons'
import Link from 'next/link';

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

          {window.id === 'about me' && (
            <div className="space-y-4 flex flex-col items-start">
              <div className="flex justify-between w-full">
                <h1 className="text-2xl font-bold">So</h1>
                <img
                  src="/me.jpg"
                  alt="My Photo"
                  className="w-32 h-auto rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold">年齢</h2>
                <p>23 (2001)</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">居住地歴</h2>
                <p>山梨 → 広島 → </p>
              </div>
              <div>
                <h2 className="text-lg font-bold">学歴</h2>
                <p>広島市立大学 情報科学部卒</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">資格</h2>
                <ul className="list-disc pl-5">
                  <li>第4級アマチュア無線技士（2014年）</li>
                  <li>実用英語技能検定2級（2018年）</li>
                  <li>普通自動車第一種運転免許（2023年）</li>
                </ul>
              </div>
            </div>
          )}

          {window.id === 'projects' && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold">My Projects</h2>
              <div className="grid gap-2">

                <Link
                  href="https://tanka-haiku.vercel.app/"
                  className="p-2 block"
                  style={{
                    backgroundColor: '#FFFFFF',
                    boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
                    cursor: 'pointer',
                    textDecoration: 'none',
                  }}
                >
                  俳句/短歌のAIサイト
                </Link>

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


// npm run dev