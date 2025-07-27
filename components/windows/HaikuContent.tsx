export default function HaikuContent() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">俳句/短歌のAIサイト</h2>
      <p>俳句や短歌に対してAIが感想を返答するWebアプリケーション</p>
      <div className="space-y-2">


        <h3 className="font-bold">コメント</h3>
        <p>Webの勉強を初めて3ヶ月目の時に右も左もわからないままv0を使って作成したものです。</p>        
        <p>不明詳細はgithubの"tanka_haiku"を参照。</p>


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
  );
} 