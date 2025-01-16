'use client'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-1 active:translate-y-[1px] bg-[#c0c0c0] shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#ffffff] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

