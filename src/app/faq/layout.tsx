import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Lung Focus | Dr. Kedar Hibare",
  description: "Find answers to common questions about pulmonology, interventional procedures, consultation locations in Bengaluru, and respiratory health. Learn about Dr. Kedar Hibare's expertise and practice at Lung Focus.",
  keywords: "FAQ, Frequently Asked Questions, Pulmonology, Interventional Pulmonology, Dr. Kedar Hibare, Lung Focus, Respiratory Health, Bengaluru Pulmonologist, EBUS, Bronchoscopy, Lung Cancer, COPD, Asthma",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Lung Focus",
    description: "Common questions about respiratory health, interventional pulmonology procedures, and consultations with Dr. Kedar Hibare in Bengaluru.",
    url: "https://www.lungfocus.com/faq",
    type: "website",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
