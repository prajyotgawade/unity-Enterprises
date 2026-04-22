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
  metadataBase: new URL("https://unitytech.in"),
  title: {
    default: "Unity Enterprises | Electrical Engineering & AI-Driven Automation",
    template: "%s | Unity Enterprises"
  },
  description: "Unity Enterprises offers premium electrical engineering, industrial automation, and AI-driven solutions. Expert electrical maintenance and digital transformation services in Mumbai and Ratnagiri.",
  keywords: ["Electrical Engineering", "AI Solutions", "Industrial Automation", "Smart Digitalization", "Solar Energy Systems", "Electrical Maintenance Chiplun", "Unity Enterprises Mumbai", "PLC Automation", "Industrial IoT"],
  authors: [{ name: "Unity Enterprises" }],
  creator: "Unity Enterprises",
  publisher: "Unity Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://unitytech.in",
    siteName: "Unity Enterprises",
    title: "Unity Enterprises | Electrical Engineering & AI Solutions",
    description: "Empowering industries with smart electrical engineering and AI-driven automation. Trusted by global brands.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unity Enterprises - Electrical Engineering & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unity Enterprises | Electrical Engineering & AI Solutions",
    description: "Leading the future of industrial automation and electrical engineering.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/unity-logo-transparent.png", type: "image/png" },
    ],
    shortcut: ["/unity-logo-transparent.png"],
    apple: [
      { url: "/unity-logo-transparent.png", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Unity Enterprises",
              "image": "https://unitytech.in/unity-logo-transparent.png",
              "@id": "https://unitytech.in",
              "url": "https://unitytech.in",
              "telephone": "+918928691044",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "A/36, New Seva Society, Datar Colony, Kurla (W)",
                "addressLocality": "Mumbai",
                "postalCode": "400070",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.0760,
                "longitude": 72.8777
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                // Add social links here
              ]
            })
          }}
        />
      </head>
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