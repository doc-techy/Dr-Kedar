import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuberculosis (TB): Why Six Months Matters | Dr. Kedar Hibare | Lung Focus",
  description: "TB is curable when treatment is taken correctly. A 6-point guide to diagnosis, sputum samples, the 6-month course, and why stopping early puts the cure at risk.",
  alternates: {
    canonical: '/blog/tuberculosis',
  },
  openGraph: {
    title: "Tuberculosis (TB): Why Six Months Matters More Than Six Weeks",
    description: "What every patient should know before and during TB treatment, including why the full six months matters.",
    images: [
      {
        url: "/images/tb-treatment.jpeg",
        width: 1920,
        height: 1080,
        alt: "Understanding tuberculosis: a comprehensive guide",
      },
    ],
  },
};

export default function TuberculosisBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
