import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asthma Triggers & Simple Precautions | Dr. Kedar Hibare | Lung Focus",
  description: "Learn about asthma triggers and 12 simple precautions that can significantly improve asthma control and reduce flare-ups. Practical tips for managing asthma at home and outdoors.",
  alternates: {
    canonical: '/blog/asthma',
  },
  openGraph: {
    title: "Asthma Triggers & Simple Precautions That Really Help",
    description: "12 simple but important precautions every person with asthma should know. Learn how to identify triggers and take practical steps for better asthma control.",
    images: [
      {
        url: "/images/asthma.jpeg",
        width: 1200,
        height: 800,
        alt: "Mastering Asthma Triggers: Your 12-Point Guide",
      },
    ],
  },
};

export default function AsthmaBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}