import FAQ from "@/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "FAQ | Trishit Char - Full-Stack Developer",
	description: "Frequently Asked Questions about Trishit Char (Trishit) - Full-Stack Developer. Find answers about Trishit's services, expertise in React, Next.js, TypeScript, Node.js, AI integration, and more.",
	keywords: [
		"Trishit FAQ",
		"Trishit Char FAQ",
		"frequently asked questions",
		"Trishit services",
		"Trishit expertise",
		"Trishit skills",
		"about Trishit",
		"Trishit experience",
		"Trishit capabilities",
		"Trishit specialization",
	],
	alternates: {
		canonical: "https://trishit.dev/faq",
	},
	openGraph: {
		title: "FAQ | Trishit Char - Full-Stack Developer",
		description: "Frequently Asked Questions about Trishit Char - Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, and AI integration.",
		url: "https://trishit.dev/faq",
		siteName: "Trishit Char Portfolio",
		images: [
			{
				url: "https://trishit.dev/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Trishit Char - FAQ",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@trishitchar",
		creator: "@trishitchar",
		title: "FAQ | Trishit Char Portfolio",
		description: "Frequently Asked Questions about Trishit - Full-Stack Developer & AI specialist",
		images: ["https://trishit.dev/opengraph-image.png"],
	},
};

export default function FAQPage() {
	return (
		<main className="relative overflow-hidden">
			{/* Gradient orb decorations */}
			<div className="gradient-orb gradient-orb-1" />
			<div className="gradient-orb gradient-orb-2" />

			{/* Grid Background Pattern */}
			<div className="fixed inset-0 grid-background pointer-events-none z-0" />

			{/* Main Content with Grid Lines */}
			<div className="relative z-10">
				{/* FAQ Section - Full width row */}
				<section id="faq" className="grid-section">
					<FAQ />
				</section>

				{/* Bottom border */}
				<div className="h-px bg-grid" />
			</div>
		</main>
	)
}
