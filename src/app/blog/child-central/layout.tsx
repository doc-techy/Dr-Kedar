import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Pulmonology Care at Child Central, Koramangala | Dr. Kedar Hibare | Lung Focus",
  description: "Adult pulmonology at Child Central, Koramangala: what Dr Kedar Hibare sees, how appointments work, when to come in, and how to book.",
  alternates: {
    canonical: '/blog/child-central',
  },
  openGraph: {
    title: "Complete Pulmonology Care at Child Central, Koramangala",
    description: "Adult lung care at Child Central, led by Dr Kedar Hibare. Appointments, who the service is for, and how to book.",
    images: [
      {
        url: "/images/pulmonology-care.jpg",
        width: 1280,
        height: 720,
        alt: "Pulmonology care: asthma, COPD, cough, breathlessness and sleep",
      },
    ],
  },
};

export default function ChildCentralBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
