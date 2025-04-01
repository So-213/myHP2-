export const metadata = {
  title: 'SoのHP',
  description: 'This is my retro homepage.',
}

export default function RootLayout({children}:{children:React.ReactNode})
 {return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.webp" />
      </head>
      <body className="min-h-screen bg-[#808080]">
        {children}
      </body>
    </html>
  )}

import './globals.css'
