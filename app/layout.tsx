// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Quiz App – Sandton School Group",
  description: "Interactive learning platform for Sandton School Group students.",
  icons: {
    icon: "/images/mainlogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} bg-[#F8F9FA] text-[#1A2A3A] antialiased font-sans`}
        suppressHydrationWarning
      >
        <AuthProvider>
          <Navbar />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}