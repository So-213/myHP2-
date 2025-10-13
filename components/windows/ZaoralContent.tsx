export default function ZaoralContent() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Zaoralサイト</h2>
      <p>LINEなどで女性に返信を促すためのアプリです.</p>
      <div className="space-y-2">
        <h3 className="font-bold">コメント</h3>     
        <p>詳細はGitHubの"Zaoral"/"Zaoral_backend3"を参照.</p>
      </div>
      <div className="space-y-2">
        <h3 className="font-bold">制作理由</h3>     
        <p>ホストの友達が姫作りに苦戦していたのを見て, LINEで既読スルーを減らせるアプリを作れないかと考えていたときに思いつきました.</p>
      </div>









      <a 
        href="https://zaoral.vercel.app/" 
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