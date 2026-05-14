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
  description: "Unity Enterprises delivers world-class electrical engineering, industrial automation, and AI-driven solutions. Leading digital transformation in Mumbai & Ratnagiri.",
  keywords: ["Electrical Engineering", "AI Solutions", "Industrial Automation", "Smart Digitalization", "Solar Energy Systems", "Electrical Maintenance Chiplun", "Unity Enterprises Mumbai", "PLC Automation", "Industrial IoT", "Unity Enterprises Ratnagiri", "Electrical Solutions India"],
  authors: [{ name: "Unity Enterprises" }],
  creator: "Unity Enterprises",
  publisher: "Unity Enterprises",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: ["/favicon.png"],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://unitytech.in",
  },
  category: 'engineering',
  manifest: '/site.webmanifest',
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Unity Enterprises",
                "alternateName": "Unity Tech",
                "url": "https://unitytech.in",
                "logo": "https://unitytech.in/unity-logo-transparent.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+918928691044",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/unity-enterprises",
                  "https://twitter.com/unityenterprises"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Unity Enterprises",
                "url": "https://unitytech.in",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://unitytech.in/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
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
                }
              }
            ])
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