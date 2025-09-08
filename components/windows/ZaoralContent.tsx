export default function ZaoralContent() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Zaoralサイト</h2>
      <p>LINEなどで女性に返信を促すためのアプリです。</p>
      {/* <div className="space-y-2">
        <h3 className="font-bold">コメント</h3>     
        <p>詳細はGitHubの"haiku-tanka2"を参照。</p>
      </div> */}
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