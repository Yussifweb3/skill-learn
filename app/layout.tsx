import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LoadingProvider } from "@/components/providers/loading-provider"
import { GlobalLoading } from "@/components/ui/global-loading"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EduLearn LMS",
  description: "A modern learning management system for online education",
  keywords: "learning, education, online courses, e-learning, LMS",
}

// Client-side providers component to isolate client-side features
function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LoadingProvider>
        <GlobalLoading />
        {children}
        <Toaster />
      </LoadingProvider>
    </ThemeProvider>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased transition-colors duration-300">
        {/* Server-rendered part */}
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
