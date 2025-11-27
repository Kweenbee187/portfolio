import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

// ✅ Use the actual Background component that contains your animations
import Background from "@/components/Background";

export const metadata = {
  title: "Sneha Chakraborty – AI Ethics",
  description: "Portfolio of Sneha Chakraborty, AI Ethicist & Security Researcher",
};

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
  );
}
