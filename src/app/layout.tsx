import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext';
import JsonLd from '@/components/JsonLd';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dr. Kedar Hibare | Lead Consultant Interventional Pulmonologist Bangalore",
  description: "Dr. Kedar Hibare - First in India to complete Interventional Pulmonology & Thoracic Oncology Fellowship. Expert in EBUS procedures, advanced bronchoscopy, thoracic oncology, and airway interventions. Book consultation at SPARSH Hospital, Bengaluru.",
  keywords: "Dr. Kedar Hibare, Interventional Pulmonologist, Pulmonologist Bangalore, EBUS procedures, Thoracic Oncology, SPARSH Hospital, Interstitial Lung Disease, Pulmonary Hypertension, Advanced Bronchoscopy, Airway Interventions, Lung Cancer Diagnosis, Bangalore Pulmonologist",
  authors: [{ name: "Dr. Kedar Hibare" }],
  creator: "Dr. Kedar Hibare",
  publisher: "Dr. Kedar Hibare",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drkedarhibare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dr. Kedar Hibare | Lead Consultant Interventional Pulmonologist Bangalore",
    description: "Expert Interventional Pulmonologist specializing in minimally invasive procedures for complex respiratory conditions. First in India to complete Interventional Pulmonology & Thoracic Oncology Fellowship.",
    url: "https://www.drkedarhibare.com",
    siteName: "Dr. Kedar Hibare",
    images: [
      {
        url: "/images/Dr-Kedar-Hibare-01.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Kedar Hibare - Lead Consultant Interventional Pulmonologist",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Kedar Hibare | Lead Consultant Interventional Pulmonologist",
    description: "Expert Interventional Pulmonologist specializing in EBUS procedures, thoracic oncology, and airway interventions.",
    images: ["/images/Dr-Kedar-Hibare-01.jpeg"],
  },
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
