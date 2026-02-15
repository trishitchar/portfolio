import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | Trishit Char - Full-Stack Developer",
	description: "Get in touch with Trishit Char (Trishit) - Full-Stack Developer available for freelance and full-time opportunities. Available for React, Next.js, TypeScript, Node.js projects, and AI integration. Contact Trishit at trishit.dev.",
	keywords: [
		"contact Trishit",
		"Trishit contact",
		"Trishit Char contact",
		"hire Trishit",
		"Trishit Char hire",
		"Trishit freelance",
		"Trishit full-time",
		"Trishit email",
		"Trishit developer contact",
		"work with Trishit",
	],
	alternates: {
		canonical: "https://trishit.dev/contact",
	},
	openGraph: {
		title: "Contact | Trishit Char - Full-Stack Developer",
		description: "Get in touch with Trishit Char - Available for freelance and full-time opportunities in React, Next.js, TypeScript, Node.js, and AI projects.",
		url: "https://trishit.dev/contact",
		siteName: "Trishit Char Portfolio",
		images: [
			{
				url: "https://trishit.dev/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: "Trishit Char - Contact",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		site: "@trishitchar",
		creator: "@trishitchar",
		title: "Contact | Trishit Char Portfolio",
		description: "Get in touch with Trishit - Available for freelance and full-time opportunities",
		images: ["https://trishit.dev/opengraph-image.png"],
	},
};

export default function ContactPage() {
	return (
		<main className="relative overflow-hidden">
			{/* Gradient orb decorations */}
			<div className="gradient-orb gradient-orb-1" />
			<div className="gradient-orb gradient-orb-2" />

			{/* Grid Background Pattern */}
			<div className="fixed inset-0 grid-background pointer-events-none z-0" />

			{/* Main Content with Grid Lines */}
			<div className="relative z-10">
				{/* Contact Section - Full width row */}
				<section id="contact" className="grid-section">
					<Contact />
				</section>

				{/* Bottom border */}
				<div className="h-px bg-grid" />
			</div>
		</main>
	)
}
