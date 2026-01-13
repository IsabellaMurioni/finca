"use client"

import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { MotionConfig } from "framer-motion"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className={`font-sans antialiased`}>
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="pt-24 md:pt-28 lg:pt-28">{children}</main>
          <Footer />
          <Analytics />
        </MotionConfig>
      </body>
    </html>
  )
}
