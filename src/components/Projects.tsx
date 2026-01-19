import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
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

const projectsData = [
	{
		id: "ai-flix",
		name: "AI-flix: GPT Integrated Movie Website",
		description: "Constructed a full-stack movie platform integrating an AI-driven search engine and fetching real-time data from TMDB API, enhancing user engagement by providing instant access to over 10,000 film titles. Improved user retention by 25% through enhanced onboarding and interactive features. Mobile app (React Native) with CMS in progress.",
		techStack: ["Gemini", "React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt", "TMDB"],
		githubUrl: "https://github.com/trishitchar/AI-flix",
		liveUrl: "https://github.com/trishitchar/AI-flix",
		author: "Trishit Char",
		datePublished: "2024-01-15",
	},
	{
		id: "tchargram",
		name: "TcharGram: Social Networking Platform",
		description: "Constructed a full-stack social networking site with a focus on user experience using React and Express.js, leading to a streamlined onboarding process that decreased user drop-off by 30% during registration. Applied real-time features including notification and chatting functionality using WebSockets, and integrated Cloudinary for efficient media storage and management.",
		techStack: ["MERN stack", "TypeScript", "WebSockets", "Cloudinary", "Shadcn UI"],
		githubUrl: "https://github.com/trishitchar/TcharGram",
		liveUrl: "https://github.com/trishitchar/TcharGram",
		author: "Trishit Char",
		datePublished: "2024-03-20",
	}
];

export default function Projects() {
	return (
		<div className="p-4 md:p-8" itemScope itemType="https://schema.org/ItemList">
			<meta itemProp="name" content="Trishit Char's Projects" />
			<meta itemProp="description" content="A collection of full-stack development projects by Trishit Char (Trishit) including AI-powered applications and social networking platforms." />

			<header className="mb-6 md:mb-8">
				<h1 className="text-2xl md:text-4xl font-bold mb-2">Full Stack Projects</h1>
				<p className="text-muted-foreground text-sm md:text-base">Featured work and side projects showcasing my technical expertise</p>
			</header>

			{/* Projects List */}
			<div className="space-y-px bg-grid">
				{projectsData.map((project, index) => (
					<article
						key={project.id}
						className="group relative bg-background transition-all duration-300 hover:bg-grid-hover"
						itemScope
						itemType="https://schema.org/CreativeWork"
						itemProp="itemListElement"
					>
						<meta itemProp="position" content={String(index + 1)} />
						<meta itemProp="author" content={project.author} />
						<meta itemProp="datePublished" content={project.datePublished} />
						<meta itemProp="url" content={project.liveUrl} />

						<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4 md:gap-6 p-4 md:p-6">
							{/* Left: Content */}
							<div>
								{/* Project Header */}
								<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
									<div>
										<h2 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors" itemProp="name">
											{project.name.split(":")[0]}
										</h2>
										<p className="text-sm text-muted-foreground">
											{project.name.includes(":") ? project.name.split(":")[1].trim() : "Full Stack Application"}
										</p>
									</div>
									<div className="flex items-center gap-2">
										<Link
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground bg-surface border border-grid rounded-sm transition-colors"
											aria-label={`View ${project.name} on GitHub`}
											itemProp="codeRepository"
										>
											<GitHubLogoIcon className="w-4 h-4" />
											<span className="hidden sm:inline">GitHub</span>
										</Link>
										<Link
											href={project.liveUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground bg-surface border border-grid rounded-sm transition-colors"
											aria-label={`View live demo of ${project.name}`}
										>
											<ExternalLinkIcon className="w-4 h-4" />
											<span className="hidden sm:inline">Demo</span>
										</Link>
									</div>
								</div>

								{/* Tech Stack */}
								<div className="flex flex-wrap gap-2 mb-4">
									{project.techStack.map((tech) => (
										<span
											key={tech}
											className="px-2 py-0.5 text-xs font-mono bg-surface border border-grid rounded-sm text-muted-foreground"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Description */}
								<p className="text-sm text-foreground/80 leading-relaxed" itemProp="description">
									{project.description}
								</p>
							</div>

							{/* Right: Image placeholder */}
							<div className="hidden lg:flex items-center justify-center">
								<div className="w-full h-full min-h-[200px] bg-surface rounded-lg border border-dashed border-grid flex items-center justify-center text-muted-foreground text-sm">
									<span>Preview</span>
								</div>
							</div>
						</div>

						{/* Hover gradient overlay */}
						<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
					</article>
				))}
			</div>
		</div>
	);
}