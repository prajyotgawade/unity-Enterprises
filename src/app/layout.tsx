import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Alfa Laval style
import "./globals.css";
import AppProviders from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UXEnhancements from "@/components/UXEnhancements";

// Unified Font: Clean, Industrial
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-heading", // Reusing variable for consistency
  weight: ["300", "400", "500", "700"],
});

const robotoBody = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Unity Enterprises - Electrical Engineering & AI Solutions",
  description: "Advanced electrical engineering, manufacturing, and AI-driven automation solutions.",
  icons: {
    icon: [
      { url: "/unity-logo-transparent.png", type: "image/png" },
    ],
    shortcut: ["/unity-logo-transparent.png"],
    apple: [
      { url: "/unity-logo-transparent.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} ${robotoBody.variable} font-body antialiased`}
        suppressHydrationWarning
      >
        <AppProviders>
          <Header />
          {children}
          <UXEnhancements />
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}