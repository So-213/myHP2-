export default function HaikuKaiContent() {
  return (
    <div className="p-4 space-y-4 w-80">
      <h2 className="text-lg font-bold">俳句/短歌のAIサイト(改)</h2>
      <p>俳句/短歌のAIサイトの改訂版です。Next.js / TypeScript仕様にした上、認証機能を追加してあります。Stripe実装は完遂できませんでした。</p>   
      <div className="space-y-2">
        <h3 className="font-bold">コメント</h3>     
        <p>詳細はGitHubの"haiku-tanka2"を参照。</p>
      </div>
      <a 
        href="https://haiku-tanka2.vercel.app/" 
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