import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Trishit Char",
  description:
    "Frequently asked questions about Trishit Char (Trishit) - Full-Stack Developer. Learn about Trishit's experience, projects, technologies, location, and availability. Get answers to common questions about hiring Trishit Char for your next project.",
  keywords: [
    "Trishit Char FAQ",
    "Trishit questions",
    "Trishit developer FAQ",
    "Who is Trishit",
    "Who is Trishit Char",
    "Trishit Char contact",
    "Hire Trishit",
    "Trishit availability",
  ],
  alternates: {
    canonical: "https://trishit.dev/faq",
  },
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Trishit Char",
    description:
      "Get answers to common questions about Trishit Char (Trishit) - Full-Stack Developer. Learn about experience, projects, and how to work with Trishit.",
    url: "https://trishit.dev/faq",
    siteName: "Trishit Char Portfolio",
    images: [
      {
        url: "https://trishit.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trishit Char FAQ - Frequently Asked Questions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trishitchar",
    creator: "@trishitchar",
    title: "FAQ - Frequently Asked Questions | Trishit Char",
    description: "Common questions about Trishit Char - Full-Stack Developer",
    images: ["https://trishit.dev/opengraph-image.png"],
  },
};

export default function FAQPage() {
  return <FAQ />;
}
