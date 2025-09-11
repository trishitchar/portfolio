import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Trishit.dev",
  description:
    "Explore full-stack and AI-powered projects by Trishit Char, including AI-flix (GPT-powered movie platform) and TcharGram (social networking app).",
  alternates: {
    canonical: "https://trishit.dev/projects",
  },
  openGraph: {
    title: "Projects | Trishit.dev",
    description:
      "Showcasing projects by Trishit Char: AI-flix, a GPT-integrated movie site, and TcharGram, a real-time social platform.",
    url: "https://trishit.dev/projects",
    siteName: "Trishit.dev",
    images: [
      {
        url: "https://trishit.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Trishit.dev Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <Projects />
    </div>
  );
}
