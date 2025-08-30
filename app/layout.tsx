import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ClientHeader } from "@/app/components/layout/client-header"
import { Footer } from "@/app/components/layout/footer"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Shri Om Plywood Pvt. Ltd. | Amarjyoti Ply — Ply Jo Amar Rahe",
  description:
    "Premium plywood, block boards, and flush doors by Shri Om Plywood Pvt. Ltd. — Amarjyoti Ply. Made in India quality with custom sizes, ISI approvals, sustainable manufacturing, and reliable delivery.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={`font-sans ${GeistSans.variable}`}>
        <ClientHeader />
        <main>{children}</main>
        <Footer />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
