import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brilliance25 Affiliate Program',
  description: 'Join the exclusive affiliate program for Brilliance25 virtual events and earn while sharing excellence.',
  keywords: 'affiliate program, virtual events, Brilliance25, event marketing',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  themeColor: '#ffffff',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} antialiased min-h-full min-w-[200px]`}>
        <div className="flex min-h-screen flex-col min-w-[200px] overflow-x-hidden">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
