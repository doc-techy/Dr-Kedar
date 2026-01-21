import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Blog | Dr. Kedar Hibare | Lung Focus",
  description: "Educational blog on respiratory health topics including Asthma, COPD, Interstitial Lung Disease, Pulmonary Hypertension, Tuberculosis, Lung Function Testing, Smoking Cessation, Lung Cancer, and Bronchoscopy.",
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}