import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Publications | Dr. Kedar Hibare",
  description: "Explore research papers, case studies, and medical publications by Dr. Kedar Hibare in the field of Pulmonology.",
  alternates: {
    canonical: '/publications',
  },
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}



