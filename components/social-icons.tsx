// export function SocialIcons() {
//   return (
//     <div className="grid grid-cols-2 gap-4">
//       <a
//         href="https://twitter.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="block p-2 rounded-lg transform transition-transform hover:scale-105"
//         style={{
//           backgroundColor: '#1DA1F2',
//           boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF'
//         }}
//       >
//         <div className="aspect-square relative bg-white p-2 rounded">
//           <svg viewBox="0 0 24 24" className="w-full h-full text-[#1DA1F2]" fill="currentColor">
//             <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
//           </svg>
//         </div>
//       </a>
//       <a
//         href="https://instagram.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="block p-2 rounded-lg transform transition-transform hover:scale-105"
//         style={{
//           background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
//           boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF'
//         }}
//       >
//         <div className="aspect-square relative bg-white p-2 rounded">
//           <svg viewBox="0 0 24 24" className="w-full h-full" fill="url(#instagram-gradient)">
//             <defs>
//               <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" style={{ stopColor: '#405DE6' }} />
//                 <stop offset="50%" style={{ stopColor: '#E1306C' }} />
//                 <stop offset="100%" style={{ stopColor: '#FD1D1D' }} />
//               </linearGradient>
//             </defs>
//             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//           </svg>
//         </div>
//       </a>
//     </div>
//   )
// }





export function SocialIcons() {
  return (
    <div className="grid grid-cols-2 gap-4">

      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 rounded-lg transform transition-transform hover:scale-105"
        style={{
          backgroundColor: '#1DA1F2',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF'
        }}
      >
        <div className="aspect-square relative bg-white p-2 rounded">
          {/* <svg viewBox="0 0 24 24" className="w-full h-full text-[#1DA1F2]" fill="currentColor">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
          </svg> */}

          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#000000]" fill="currentColor">
            <path d="M3 0L12 11L21 0H16L12 5L8 0H3Z" />
            <path d="M3 24L12 13L21 24H16L12 19L8 24H3Z" />
          </svg>

        </div>
      </a>



      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 rounded-lg transform transition-transform hover:scale-105"
        style={{
          background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D)',
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF'
        }}
      >
        <div className="aspect-square relative bg-white p-2 rounded">
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="url(#instagram-gradient)">
            <defs>
              <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#405DE6' }} />
                <stop offset="50%" style={{ stopColor: '#E1306C' }} />
                <stop offset="100%" style={{ stopColor: '#FD1D1D' }} />
              </linearGradient>
            </defs>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </div>
      </a>



      {/* GitHub */}
      {/* <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 rounded-lg transform transition-transform hover:scale-105"
        style={{
          backgroundColor: '#333', // GitHubの背景色
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        }}
      >
        <div
          className="aspect-square relative bg-white p-2 rounded"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full text-white"
            fill="currentColor"
            style={{ width: '100%', height: '100%' }}
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.111.82-.261.82-.579 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.762-1.605-2.665-.304-5.467-1.333-5.467-5.93 0-1.31.467-2.382 1.235-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.007-.322 3.3 1.23a11.47 11.47 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.48 5.922.432.372.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.292 0 .321.216.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0Z" />
          </svg>
        </div>
      </a> */}

      
      {/* Qiita */}
      {/* <a
        href="https://qiita.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-2 rounded-lg transform transition-transform hover:scale-105"
        style={{
          backgroundColor: '#55C500', // Qiitaのブランドカラー
          boxShadow: 'inset -1px -1px 0 #808080, inset 1px 1px 0 #FFFFFF',
        }}
      >
        <div
          className="aspect-square relative bg-white p-2 rounded"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-full h-full text-white"
            fill="currentColor"
            style={{ width: '100%', height: '100%' }}
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 4.991 3.657 9.12 8.438 10.458.617.114.847-.267.847-.594 0-.292-.01-1.064-.016-2.088-3.432.747-4.153-1.655-4.153-1.655-.562-1.422-1.375-1.801-1.375-1.801-1.123-.77.085-.755.085-.755 1.24.087 1.892 1.272 1.892 1.272 1.106 1.895 2.899 1.347 3.606 1.031.113-.802.432-1.348.786-1.656-2.739-.312-5.62-1.37-5.62-6.086 0-1.345.481-2.445 1.27-3.304-.127-.313-.551-1.574.121-3.28 0 0 1.039-.332 3.404 1.267 1.08-.3 2.24-.449 3.392-.454 1.152.005 2.313.154 3.396.454 2.362-1.6 3.398-1.267 3.398-1.267.676 1.706.253 2.967.126 3.28.788.86 1.265 1.96 1.265 3.304 0 4.73-2.887 5.767-5.637 6.071.445.383.841 1.137.841 2.292 0 1.656-.016 2.99-.016 3.396 0 .333.225.717.854.594C20.343 21.115 24 16.985 24 12c0-6.627-5.373-12-12-12Z" />
          </svg>
        </div>
      </a> */}



    </div>
  )
}
