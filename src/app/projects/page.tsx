import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | Trishit Char - Full-Stack Developer",
	description: "Explore Trishit Char's (Trishit) portfolio projects including AI-flix (GPT-powered movie platform), TcharGram (social networking app), and more. View Trishit's full-stack development work built with React, Next.js, TypeScript, Node.js, and AI integration.",
	keywords: [
		"Trishit projects",
		"Trishit Char projects",
		"AI-flix",
		"TcharGram",
		"Trishit portfolio projects",
		"Trishit React projects",
		"Trishit full stack projects",
		"Trishit Next.js projects",
		"Trishit web development",
		"Trishit Node.js projects",
	],
	alternates: {
		canonical: "https://trishit.dev/projects",
	},
	openGraph: {
		title: "Projects | Trishit Char - Full-Stack Developer",
		description: "Trishit Char's full-stack development projects: AI-flix, TcharGram, and more. Built with React, Next.js, TypeScript, Node.js, and AI integration.",
		url: "https://trishit.dev/projects",
		siteName: "Trishit Char Portfolio",
		images: [
			{
				url: "https://trishit.dev/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Trishit Char - Projects Portfolio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@trishitchar",
		creator: "@trishitchar",
		title: "Projects | Trishit Char Portfolio",
		description: "Trishit's full-stack development projects - AI-flix, TcharGram, and more",
		images: ["https://trishit.dev/opengraph-image.png"],
	},
};

export default function ProjectsPage() {
	return (
		<main className="relative overflow-hidden">
			{/* Gradient orb decorations */}
			<div className="gradient-orb gradient-orb-1" />
			<div className="gradient-orb gradient-orb-2" />

			{/* Grid Background Pattern */}
			<div className="fixed inset-0 grid-background pointer-events-none z-0" />

			{/* Main Content with Grid Lines */}
			<div className="relative z-10">
				{/* Projects Section */}
				<section id="projects" className="grid-section">
					<Projects />
				</section>

				{/* Bottom border */}
				<div className="h-px bg-grid" />
			</div>
		</main>
	)
}
