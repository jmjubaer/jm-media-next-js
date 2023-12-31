import './globals.css'
import Navbar from '@/shered/Navbar'
import { Inter } from 'next/font/google'
import AuthProvider from '@/Provider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <AuthProvider>
            <body className={`${inter.className} bg-[#edf1f4]`}>
              <Navbar></Navbar>
              <main className='min-h-[calc(100vh-50px)]'>
                {children}
              </main>
            </body>
        </AuthProvider>
    </html>
  )
}
