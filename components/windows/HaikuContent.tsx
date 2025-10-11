export default function HaikuContent() {
  return (
    <div className="p-4 space-y-4 w-80">
      <h2 className="text-lg font-bold">俳句/短歌のAIサイト</h2>
      <p>俳句や短歌に対してAIが感想を返答してくれるWebアプリケーションです.</p>
      <div className="space-y-2">
        <h3 className="font-bold">コメント</h3>
        <p>Webの勉強を初めて3ヶ月目の時に右も左もわからないままv0を使って作成したものです.</p>        
        <p>詳細はGitHubの"tanka_haiku"を参照.</p>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold">制作理由</h3>
        <p>Webの勉強を始めて3ヶ月目の頃, V0という非常に便利なツールを知り, V0で何か簡単なものを作ってみたいと考えた結果, 祖母が俳句に夢中になっていたのを見て思いついたのがこのアプリです.</p>
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