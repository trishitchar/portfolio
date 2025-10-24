import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects by Trishit Char | Full-Stack Developer Portfolio",
  description:
    "Explore full-stack and AI-powered projects by Trishit Char (Trishit), including AI-flix (GPT-powered movie platform with 10,000+ titles), TcharGram (real-time social networking app), and more. Discover how Trishit builds innovative web applications using React, Next.js, Node.js, and AI integration.",
  keywords: [
    "Trishit Char projects",
    "Trishit projects",
    "Trishit developer projects",
    "Trishit Char portfolio",
    "AI-flix Trishit",
    "TcharGram Trishit Char",
    "Trishit React projects",
    "Trishit full stack projects",
    "Trishit AI projects",
  ],
  alternates: {
    canonical: "https://trishit.dev/projects",
  },
  openGraph: {
    title: "Projects by Trishit Char | Full-Stack Developer",
    description:
      "Showcasing innovative projects by Trishit Char (Trishit): AI-flix, a GPT-integrated movie site, and TcharGram, a real-time social platform. See how Trishit Char builds modern web applications.",
    url: "https://trishit.dev/projects",
    siteName: "Trishit Char Portfolio",
    images: [
      {
        url: "https://trishit.dev/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Trishit Char's Projects - Full-Stack Development Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@trishitchar",
    creator: "@trishitchar",
    title: "Projects by Trishit Char",
    description: "Explore full-stack projects by Trishit including AI-flix and TcharGram",
    images: ["https://trishit.dev/opengraph-image.png"],
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <Projects />
    </div>
  );
}
