import { WindowWrapper } from "./WindowWrapper";



export default function HaikuWindow({ onClose }: { onClose: () => void }) {
  return (
    <WindowWrapper title="俳句/短歌のAIサイト" onClose={onClose}>
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-bold">俳句/短歌のAIサイト</h2>
        <p>AIを使って俳句や短歌を自動生成するWebアプリケーションです。</p>
        <div className="space-y-2">
          <h3 className="font-bold">使用技術：</h3>
          <ul className="list-disc list-inside">
            <li>Next.js</li>
            <li>OpenAI API</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <a 
          href="https://tanka-haiku.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
            cursor: 'pointer',
          }}
        >
          サイトを開く
        </a>
      </div>
    </WindowWrapper>
  );
} 