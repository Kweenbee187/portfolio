import "./globals.css"
import { ThemeProvider } from "next-themes"
import dynamic from "next/dynamic"
import Navbar from "@/components/Navbar"
import PageTransition from "@/components/PageTransition"

const Background = dynamic(() => import("@/components/Background"), {
  ssr: false,
})

export const metadata = {
  title: "Sneha Chakraborty – AI Ethics",
  description: "Portfolio of Sneha Chakraborty, AI Ethicist & Security Researcher",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          
          {/* Background Animation */}
          <Background />

          {/* Foreground */}
          <div className="relative z-10 min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 px-6 py-10 flex items-center justify-center">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          </div>

        </ThemeProvider>
      </body>
    </html>
  )
}
