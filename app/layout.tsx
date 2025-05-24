import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serenity - Mental Health Support | Professional Therapy Services",
  description:
    "Professional, compassionate mental health support in a safe, confidential environment. Licensed therapists, crisis support, and resources for your mental wellness journey.",
  keywords:
    "mental health, therapy, counseling, depression, anxiety, crisis support, online therapy, licensed therapists",
  authors: [{ name: "Serenity Mental Health Team" }],
  openGraph: {
    title: "Serenity - Mental Health Support",
    description: "Professional mental health support with licensed therapists. Your mental health matters.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serenity - Mental Health Support",
    description: "Professional mental health support with licensed therapists.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
