import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quit Smoking: Simple Steps That Really Help | Dr. Kedar Hibare | Lung Focus",
  description: "A 10-point guide to quitting smoking: dependence, triggers, proven treatments, and how the body recovers from 20 minutes to 15 years after you stop.",
  alternates: {
    canonical: '/blog/smoking-cessation',
  },
  openGraph: {
    title: "Quit Smoking: Simple Steps That Really Help",
    description: "A practical 10-point guide to quitting smoking, plus how quickly the benefits begin.",
    images: [
      {
        url: "/images/quit-smoking.jpeg",
        width: 1020,
        height: 477,
        alt: "Timeline of what happens in the body after you quit smoking",
      },
    ],
  },
};

export default function SmokingCessationBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
