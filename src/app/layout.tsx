import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/shared/Header'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'WebMaster-KH',
  description:
    'Una plataforma integral de recursos esenciales para desarrolladores web.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/Web-MasterKH.ico' />
      <body className={`${inter.className} bg-[url('/images/cool-background.svg')] bg-no-repeat bg-cover bg-center min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
