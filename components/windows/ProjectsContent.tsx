import Link from "next/link";

export default function ProjectsContent() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">My Projects</h2>
      <div className="grid gap-2">
        <Link href="https://tanka-haiku.vercel.app/" className="p-2 block" style={linkStyle}>
          ①俳句/短歌のAIサイト
        </Link>
        <Link href="/creating" className="p-2 block" style={linkStyle}>
          ②Zaoralサイト（作成中）
        </Link>
      </div>
    </div>
  );
}

const linkStyle = {
  backgroundColor: '#FFFFFF',
  boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
  cursor: 'pointer',
  textDecoration: 'none',
};
