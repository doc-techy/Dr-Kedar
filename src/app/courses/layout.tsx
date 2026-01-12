import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses & Training | Dr. Kedar Hibare",
  description: "Specialized training courses in Interventional Pulmonology, EBUS, and Thoracic Ultrasound led by Dr. Kedar Hibare.",
  alternates: {
    canonical: '/courses',
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}



