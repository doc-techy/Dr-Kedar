import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Videos | Lung Focus | Dr. Kedar Hibare",
  description: "Watch educational videos on respiratory health, procedures, and lung care by Dr. Kedar Hibare.",
  alternates: {
    canonical: '/videos',
  },
};

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}



