import { ReactNode } from "react";



interface WindowWrapperProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function WindowWrapper({ title, children, onClose }: WindowWrapperProps) {
  return (
    // ウィンドウ位置など
    <div 
      className="fixed top-1 left-1/2 z-50"
      style={{
        backgroundColor: '#C0C0C0',
        border: '2px solid #FFFFFF',
        boxShadow: '2px 2px 0 #808080',
        minWidth: '400px',
        maxWidth: '90vw',
        maxHeight: '90vh',
      }}
    >   

      {/* 青いとこ */}
      <div 
        className="flex justify-between items-center px-2 py-1"
        style={{
          backgroundColor: '#000080',
          color: '#FFFFFF',
        }}
      >

        <span>{title}</span>
        <button
          onClick={onClose}
          className="px-2 py-0.5"
          style={{
            backgroundColor: '#C0C0C0',
            boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
          }}
        >
          ×
        </button>

      </div>

      {/* 内容 */}
      <div className="overflow-auto" style={{ maxHeight: 'calc(90vh - 40px)' }}>
        {children}
      </div>


    </div>
  );
} 