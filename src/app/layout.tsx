import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dr. Smith Medical Center - Quality Healthcare",
  description: "Experienced Internal Medicine Physician providing comprehensive healthcare services. Book your appointment today.",
  keywords: "doctor, medical center, internal medicine, healthcare, appointments",
  authors: [{ name: "Dr. John Smith" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
