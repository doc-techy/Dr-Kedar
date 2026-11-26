import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Bedroom Is Not a Newsroom | Dr. Kedar Hibare | Lung Focus",
  description: "Sleep hygiene is the habits, routines and environment that shape how well you sleep. A practical guide from Dr Kedar Hibare, Consultant Pulmonologist at Child Central.",
  alternates: {
    canonical: '/blog/sleep-hygiene',
  },
  openGraph: {
    title: "Your Bedroom Is Not a Newsroom",
    description: "Start with one sleep habit tonight: phone, wake-up time, light, and a quieter bedroom.",
    images: [
      {
        url: "/images/sleep-hygiene.png",
        width: 1200,
        height: 2932,
        alt: "Healthy sleep habits infographic",
      },
    ],
  },
};

export default function SleepHygieneBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
