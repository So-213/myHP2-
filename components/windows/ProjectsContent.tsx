import { useWindows } from '../window-provider'
import { useCallback } from 'react'



export default function ProjectsContent() {
  const { toggleWindow, addWindow, windows } = useWindows()





  const handleHaikuClick = useCallback(() => {
    const haikuWindow = {
      id: 'haiku',
      title: '俳句/短歌のAIサイト',
      isOpen: true,
      position: { x: 100, y: 20 },
      showInTaskbar: false
    }

    // ウィンドウが存在しない場合のみ追加
    if (!windows.some(w => w.id === 'haiku')) {
      addWindow(haikuWindow)
    } else {
      toggleWindow('haiku')
    }
  }, [addWindow, toggleWindow, windows])



  const handleHaikuKaiClick = useCallback(() => {
    const haikuKaiWindow = {
      id: 'haikuKai',
      title: '俳句/短歌のAIサイト（改）',
      isOpen: true,
      position: { x: 500, y: 20 },
      showInTaskbar: false
    }

    // ウィンドウが存在しない場合のみ追加
    if (!windows.some(w => w.id === 'haikuKai')) {
      addWindow(haikuKaiWindow)
    } else {
      toggleWindow('haikuKai')
    }
  }, [addWindow, toggleWindow, windows])



  const handleZaoralClick = useCallback(() => {
    const zaoralWindow = {
      id: 'zaoral',
      title: 'zaoralサイト',
      isOpen: true,
      position: { x: 900, y: 20 },
      showInTaskbar: false
    }

    // ウィンドウが存在しない場合のみ追加
    if (!windows.some(w => w.id === 'zaoral')) {
      addWindow(zaoralWindow)
    } else {
      toggleWindow('zaoral')
    }
  }, [addWindow, toggleWindow, windows])




  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">My Projects</h2>

      <div 
        className="p-2 block" 
        style={linkStyle}
        onClick={handleHaikuClick}
      >
        ①俳句/短歌のAIサイト
      </div>

      <div 
        className="p-2 block" 
        style={linkStyle}
        onClick={handleHaikuKaiClick}
      >
        ②俳句/短歌のAIサイト（改）
      </div>

      <div 
        className="p-2 block" 
        style={linkStyle}
        onClick={handleZaoralClick}
      >
        ③Zaoralサイト（作成中）
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



