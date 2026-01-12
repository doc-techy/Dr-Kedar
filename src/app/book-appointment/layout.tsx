import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment | Dr. Kedar Hibare",
  description: "Schedule a consultation with Dr. Kedar Hibare at SPARSH Hospital or other clinics in Bangalore.",
  alternates: {
    canonical: '/book-appointment',
  },
};

export default function BookAppointmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}



