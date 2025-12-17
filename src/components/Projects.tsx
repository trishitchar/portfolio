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
		techStack: "Gemini | React | Tailwind CSS | Node.js | Express.js | MongoDB | JWT | Bcrypt | TMDB",
		githubUrl: "https://github.com/trishitchar/AI-flix",
		liveUrl: "https://github.com/trishitchar/AI-flix",
		author: "Trishit Char",
		datePublished: "2024-01-15",
	},
	{
		id: "tchargram",
		name: "TcharGram: Social Networking Platform",
		description: "Constructed a full-stack social networking site with a focus on user experience using React and Express.js, leading to a streamlined onboarding process that decreased user drop-off by 30% during registration. Applied real-time features including notification and chatting functionality using WebSockets, and integrated Cloudinary for efficient media storage and management.",
		techStack: "MERN stack | TypeScript | WebSockets | Cloudinary | Shadcn UI",
		githubUrl: "https://github.com/trishitchar/TcharGram",
		liveUrl: "https://github.com/trishitchar/TcharGram",
		author: "Trishit Char",
		datePublished: "2024-03-20",
	}
];

export default function Projects() {
	return (
		<div className="px-4 py-1 space-y-7 mx-auto" itemScope itemType="https://schema.org/ItemList">
			<meta itemProp="name" content="Trishit Char's Projects" />
			<meta itemProp="description" content="A collection of full-stack development projects by Trishit Char (Trishit) including AI-powered applications and social networking platforms." />

			<header className="mb-6">
				<h1 className="text-4xl font-bold mb-3">Full Stack Projects</h1>
			</header>

			<div className="relative">
				<div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

				<ul className="space-y-8">
					{projectsData.map((project, index) => (
						<li key={project.id} className="flex items-start md:items-center">
							<div className="flex-shrink-0 mr-4">
								<div className="w-4 h-4 rounded-full bg-border ring-4 ring-white dark:ring-gray-900 shadow-sm" />
							</div>

							<div className="flex-1" itemScope itemType="https://schema.org/CreativeWork" itemProp="itemListElement">
								<meta itemProp="position" content={String(index + 1)} />
								<meta itemProp="author" content={project.author} />
								<meta itemProp="datePublished" content={project.datePublished} />
								<meta itemProp="url" content={project.liveUrl} />

								<div className="flex flex-col md:flex-row gap-6">
									<div className="w-full md:w-[60%] space-y-4">
										<div className="flex flex-col md:flex-row md:justify-between md:items-center bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm border border-border">
											<div>
												<h2 className="text-lg font-semibold" itemProp="name">
													{project.name.split(":")[0]}
												</h2>
												<p className="text-sm text-muted-foreground" itemProp="keywords">
													Full Stack Application
												</p>
											</div>
											<time className="mt-2 md:mt-0 text-sm text-muted-foreground">{project.datePublished}</time>
										</div>

										<ul className="ml-4 list-disc text-sm text-gray-700 dark:text-gray-300 space-y-2">
											<li>
												<strong>Tech Stack:</strong> {project.techStack}
											</li>
											<li itemProp="description">
												{project.description}
											</li>
											<li className="list-none pt-2">
												<div className="flex items-center gap-4">
													<a
														href={project.githubUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
														aria-label={`View ${project.name} by Trishit Char on GitHub`}
														itemProp="codeRepository"
													>
														<GitHubLogoIcon className="w-5 h-5" /> GitHub
													</a>
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="flex items-center gap-1 text-sm text-green-600 dark:text-green-400 hover:underline"
														aria-label={`View live demo of ${project.name} by Trishit`}
													>
														<ExternalLinkIcon className="w-5 h-5" /> Live Demo
													</a>
												</div>
											</li>
										</ul>
									</div>

									<div className="w-full md:w-[40%] hidden md:block">
										<div className="h-full min-h-[200px] w-full bg-gray-100 dark:bg-gray-800/50 rounded-xl border-2 border-dashed border-border flex items-center justify-center text-muted-foreground">
											<span>Project Preview</span>
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}