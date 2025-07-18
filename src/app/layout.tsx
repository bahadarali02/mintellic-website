import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import Preloader from './components/ui/Preloader'
import { ThemeProvider } from './components/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mintellic | Creative Digital Agency',
  description: 'A creative digital agency run by two passionate friends',
  metadataBase: new URL('https://mintellic.vercel.app'),
  openGraph: {
    images: '/opengraph-image.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <style>
          {`
            @font-face {
              font-family: 'Satoshi';
              src: url('/fonts/Satoshi-Regular.woff2') format('woff2');
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'Satoshi';
              src: url('/fonts/Satoshi-Bold.woff2') format('woff2');
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }
          `}
        </style>
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}