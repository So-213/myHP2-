import { useState } from "react";
import HaikuWindow from "./HaikuWindow";

export default function ProjectsContent() {
  const [showHaikuWindow, setShowHaikuWindow] = useState(false);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">My Projects</h2>


      <div 
        className="p-2 block" 
        style={linkStyle}
        onClick={() => setShowHaikuWindow(true)}
      >
        ①俳句/短歌のAIサイト
      </div>
      
      {showHaikuWindow && (
        <HaikuWindow onClose={() => setShowHaikuWindow(false)} />   // onCloseはアロー関数
      )}
      
      <div className="p-2 block" style={linkStyle}>
        ②Zaoralサイト（作成中）
      </div>


    </div>
  );
}

{/* <Link href="https://tanka-haiku.vercel.app/" className="p-2 block" style={linkStyle}>
①俳句/短歌のAIサイト
</Link>
<Link href="/creating" className="p-2 block" style={linkStyle}>
②Zaoralサイト（作成中）
</Link> */}

const linkStyle = {
  backgroundColor: '#FFFFFF',
  boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
  cursor: 'pointer',
  textDecoration: 'none',
};



