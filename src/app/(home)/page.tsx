import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Trishit Char - Full-Stack Developer Portfolio | Trishit.dev",
	description: "Welcome to Trishit Char's (Trishit) official portfolio at trishit.dev. Discover projects by Trishit including AI-flix (GPT-powered movie platform), TcharGram (social networking app), and more. Trishit specializes in React, Next.js, TypeScript, Node.js, and AI integration. Explore Trishit Char's work, technical skills, and professional experience.",
	keywords: [
		"Trishit",
		"Trishit Char",
		"Trishit developer",
		"Trishit portfolio",
		"Trishit Char portfolio",
		"Trishit full stack developer",
		"Trishit.dev",
		"Trishit Char projects",
		"Trishit React developer",
		"Trishit AI developer",
	],
	alternates: {
		canonical: "https://trishit.dev",
	},
	openGraph: {
		title: "Trishit Char - Full-Stack Developer Portfolio | Trishit.dev",
		description: "Explore Trishit Char's (Trishit) portfolio showcasing AI-flix, TcharGram, and other full-stack projects. Trishit specializes in React, Next.js, TypeScript, and modern web development.",
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
		description: "Discover Trishit's (Trishit Char) full-stack development projects at trishit.dev",
		images: ["https://trishit.dev/opengraph-image.png"],
	},
};

export default function Home() {
	return (
		<main className="max-w-6xl mx-auto">
			<div className="h-full border-2 border-yellow-400">
				<Hero />
			</div>
			<div className="h-full border-2 border-red-400">
				<Projects />
			</div>
			<div className="h-full border-2 border-green-400">
				<Experience />
			</div>
			<div className="h-full border-2 border-blue-400">
				<Contact />
			</div>
			<div className="h-full border-2 border-purple-400">
				<FAQ />
			</div>
		</main>
	)
}
