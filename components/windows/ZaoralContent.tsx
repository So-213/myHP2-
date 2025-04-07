export default function ZaoralContent() {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-bold">Zaoralサイト</h2>
      <p>作成中</p>
      <div className="space-y-2">

        <h3 className="font-bold">制作期間</h3>
        <p>不明</p>

        <p></p>

        <h3 className="font-bold">使用技術</h3>
        <ul className="list-disc list-inside">
          <li>Vercelホスティング</li>
          <li>Next.js</li>
          <li>Auth.js</li>
          <li>Stripe</li>
          <li>EC2など</li>
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
  );
} 