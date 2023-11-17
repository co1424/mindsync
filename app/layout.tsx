import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mindsync',
  description: 'The connected workspace where better, faster work happens.',
  icons: {
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
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
    <html lang="en" suppressHydrationWarning >
      <body className={inter.className}>
        <ConvexClientProvider> {/* ConvexClientProvider is a custom provider that wraps ConvexProviderWithClerk and ClerkProvider for authentication*/}
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='jotion-theme'
        >
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
