import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Worse on TB Treatment? Read This Before You Stop | Dr. Kedar Hibare | Lung Focus",
  description: "TB medicine side effects are usually manageable. Know what rifampicin, isoniazid, pyrazinamide and ethambutol can cause, and why you should not stop treatment on your own.",
  alternates: {
    canonical: '/blog/tb-side-effects',
  },
  openGraph: {
    title: "Worse on TB Treatment? Read This Before You Stop",
    description: "What to expect from TB medicines, how liver checks work, and when to call your doctor instead of stopping.",
    images: [
      {
        url: "/images/tb-medicines.jpeg",
        width: 1200,
        height: 881,
        alt: "Standard TB medicines: rifampicin, ethambutol, pyrazinamide and isoniazid",
      },
    ],
  },
};

export default function TbSideEffectsBlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
