import Header from './components/header';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ES REPORT',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header/>
        <main >
          {children}
        </main>
      </body>
    </html>
  )
}
