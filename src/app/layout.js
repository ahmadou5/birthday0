import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      <body className={`${inter.className} bg-slate-900 text-slate-100  `}>{children}</body>
    </html>
  )
}
