import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Trishit Char - Full-Stack Developer Portfolio | Trishit.dev",
	description: "Welcome to Trishit Char's (Trishit) official portfolio at trishit.dev. Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, and AI integration. Explore Trishit Char's work, technical skills, and professional experience.",
	keywords: [
		"Trishit",
		"Trishit Char",
		"Trishit developer",
		"Trishit portfolio",
		"Trishit Char portfolio",
		"Trishit full stack developer",
		"Trishit.dev",
		"trishit full stack",
		"Trishit React developer",
		"Trishit TypeScript developer",
	],
	alternates: {
		canonical: "https://trishit.dev",
	},
	openGraph: {
		title: "Trishit Char - Full-Stack Developer Portfolio | Trishit.dev",
		description: "Trishit Char's (Trishit) official portfolio showcasing expertise in React, Next.js, TypeScript, Node.js, and AI integration.",
		url: "https://trishit.dev",
		siteName: "Trishit Char Portfolio",
		images: [
			{
				url: "https://trishit.dev/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Trishit Char - Full-Stack Developer Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@trishitchar",
		creator: "@trishitchar",
		title: "Trishit Char - Full-Stack Developer Portfolio",
		description: "Trishit Char's (Trishit) official portfolio at trishit.dev - Full-Stack Developer & AI specialist",
		images: ["https://trishit.dev/opengraph-image.png"],
	},
};

export default function Home() {
	return (
		<main className="relative overflow-hidden">
			{/* Gradient orb decorations */}
			<div className="gradient-orb gradient-orb-1" />
			<div className="gradient-orb gradient-orb-2" />

			{/* Grid Background Pattern */}
			<div className="fixed inset-0 grid-background pointer-events-none z-0" />

			{/* Main Content with Grid Lines */}
			<div className="relative z-10">
				{/* Hero Section */}
				<section id="home" className="grid-section">
					<Hero />
				</section>

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
