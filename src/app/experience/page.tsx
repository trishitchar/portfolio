import Experience from "@/components/Experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Experience | Trishit Char - Full-Stack Developer",
	description: "Explore Trishit Char's (Trishit) professional experience and work history. Full-Stack Developer with expertise in React, Next.js, TypeScript, Node.js, and AI integration. View detailed information about Trishit's career, projects, and technical skills.",
	keywords: [
		"Trishit experience",
		"Trishit Char experience",
		"Trishit work history",
		"Trishit career",
		"Trishit professional experience",
		"Trishit expertise",
		"Trishit skills",
		"Trishit projects",
		"Trishit developer experience",
		"Trishit full stack",
	],
	alternates: {
		canonical: "https://trishit.dev/experience",
	},
	openGraph: {
		title: "Experience | Trishit Char - Full-Stack Developer",
		description: "Trishit Char's professional experience and work history - Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, and AI integration.",
		url: "https://trishit.dev/experience",
		siteName: "Trishit Char Portfolio",
		images: [
			{
				url: "https://trishit.dev/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Trishit Char - Experience",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@trishitchar",
		creator: "@trishitchar",
		title: "Experience | Trishit Char Portfolio",
		description: "Trishit Char's professional experience - Full-Stack Developer & AI specialist",
		images: ["https://trishit.dev/opengraph-image.png"],
	},
};

export default function ExperiencePage() {
	return (
		<main className="relative overflow-hidden">
			{/* Gradient orb decorations */}
			<div className="gradient-orb gradient-orb-1" />
			<div className="gradient-orb gradient-orb-2" />

			{/* Grid Background Pattern */}
			<div className="fixed inset-0 grid-background pointer-events-none z-0" />

			{/* Main Content with Grid Lines */}
			<div className="relative z-10">
				{/* Experience Section */}
				<section id="experience" className="grid-section">
					<Experience />
				</section>

				{/* Bottom border */}
				<div className="h-px bg-grid" />
			</div>
		</main>
	)
}
