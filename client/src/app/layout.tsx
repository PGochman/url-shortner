import type { Metadata } from 'next'
import "./globals.css"
import icon from "@/app/linkIcon.ico"
import { inter } from './ui/fonts'

export const metadata: Metadata = {
  title: 'URL Shortner - Practice App',
  description: 'Practice app creating an URL shortner',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-primary">
      <head>
        <link rel="icon" href={icon.src} sizes="any" />
      </head>
      <body className={`${inter.className} antialised`} >{children}</body>
    </html>
  )
}
