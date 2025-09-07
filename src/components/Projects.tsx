import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Projects() {
    return (
		<div className="flex flex-col items-center justify-center px-6 py-10">
			<div className="grid gap-6 max-w-3xl w-full">
				{/* AI-flix Project */}
				<div className="rounded-2xl shadow-md p-6 border border-gray-200 bg-white hover:shadow-lg transition">
					<h2 className="text-2xl font-semibold mb-2">AI-flix: GPT Integrated Movie Website</h2>
					<p className="text-sm text-gray-600 mb-3">
						Tech Stack: Gemini | React | Tailwind CSS | Node.js | Express.js | MongoDB | JWT | Bcrypt | TMDB
					</p>
					<p className="text-gray-700 mb-3">
						Constructed a full-stack movie platform integrating an AI-driven search engine and fetching
						real-time data from TMDB API, enhancing user engagement by providing instant access to over
						10,000 film titles. Improved user retention by 25% through enhanced onboarding and interactive
						features. Mobile app (React Native) with CMS in progress.
					</p>
					<div className="flex items-center gap-4">
						<a
							href="https://github.com/trishitchar/AI-flix"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
						>
							<GitHubLogoIcon className="w-5 h-5" /> GitHub
						</a>
						<a
							href="https://github.com/trishitchar/AI-flix"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-green-600 hover:underline"
						>
							Live
						</a>
					</div>
				</div>

				{/* TcharGram Project */}
				<div className="rounded-2xl shadow-md p-6 border border-gray-200 bg-white hover:shadow-lg transition">
					<h2 className="text-2xl font-semibold mb-2">TcharGram: Social Networking Platform</h2>
					<p className="text-sm text-gray-600 mb-3">
						Tech Stack: MERN stack | TypeScript | WebSockets | Cloudinary | Shadcn UI
					</p>
					<p className="text-gray-700 mb-3">
						Constructed a full-stack social networking site with a focus on user experience using React and
						Express.js, leading to a streamlined onboarding process that decreased user drop-off by 30%
						during registration. Applied real-time features including notification and chatting functionality
						using WebSockets, and integrated Cloudinary for efficient media storage and management.
					</p>
					<div className="flex items-center gap-4">
						<a
							href="https://github.com/trishitchar/TcharGram"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
						>
							<GitHubLogoIcon className="w-5 h-5" /> GitHub
						</a>
						<a
							href="https://github.com/trishitchar/TcharGram"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-green-600 hover:underline"
						>
							Live
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}