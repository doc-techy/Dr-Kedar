import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Kedar Hibare | Lung Focus",
  description: "Learn about Dr. Kedar Hibare, a leading Interventional Pulmonologist in Bangalore. Specializing in advanced bronchoscopy, EBUS, and thoracic oncology.",
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}

