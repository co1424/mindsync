import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mindsync',
  description: 'The connected workspace where better, faster work happens.',
  icons: {
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url: "/mindSync.svg",
        href: "/mindSync.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/mindSync-darkMode.svg",
        href: "/mindSync-darkMode.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
