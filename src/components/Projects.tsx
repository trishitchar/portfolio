import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
		<article className="flex flex-col items-center justify-center px-6 py-10" itemScope itemType="https://schema.org/ItemList">
			<meta itemProp="name" content="Trishit Char's Projects" />
			<meta itemProp="description" content="A collection of full-stack development projects by Trishit Char (Trishit) including AI-powered applications and social networking platforms." />
			
			<div className="grid gap-6 max-w-3xl w-full">
				{projectsData.map((project, index) => (
					<section 
						key={project.id}
						className="rounded-2xl shadow-md p-6 border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition"
						itemScope 
						itemType="https://schema.org/CreativeWork"
						itemProp="itemListElement"
					>
						<meta itemProp="position" content={String(index + 1)} />
						<meta itemProp="author" content={project.author} />
						<meta itemProp="datePublished" content={project.datePublished} />
						<meta itemProp="url" content={project.liveUrl} />
						
						<h2 className="text-2xl font-semibold mb-2" itemProp="name">
							{project.name} by <Link href="/" className="text-primary hover:underline">Trishit Char</Link>
						</h2>
						<p className="text-sm text-gray-600 dark:text-gray-400 mb-3" itemProp="keywords">
							<strong>Tech Stack:</strong> {project.techStack}
						</p>
						<p className="text-gray-700 dark:text-gray-300 mb-3" itemProp="description">
							{project.description}
						</p>
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
								className="text-sm text-green-600 dark:text-green-400 hover:underline"
								aria-label={`View live demo of ${project.name} by Trishit`}
							>
								Live Demo
							</a>
						</div>
					</section>
				))}
			</div>

			{/* Additional SEO content */}
			<footer className="mt-8 max-w-3xl text-center text-sm text-gray-600 dark:text-gray-400">
				<p>
					These projects showcase <strong>Trishit Char's</strong> expertise in full-stack development, 
					AI integration, and modern web technologies. <strong>Trishit</strong> continues to build 
					innovative solutions that solve real-world problems. 
					<Link href="/contact" className="text-primary hover:underline ml-1">
						Contact Trishit Char
					</Link> for collaborations or freelance opportunities.
				</p>
			</footer>
		</article>
	);
}