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
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} antialiased min-h-full`}>
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
