import Link from 'next/link'
import { Rss } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { skillsConfig } from '@/configs/skills.config'
import { ThemeI } from './theme/theme-i'
import { socialLinks } from '@/configs/social.config'
import GithubData from '@/components/GithubData'


export default function Hero() {
	return (
		<div className="p-4 md:p-8" itemScope itemType="https://schema.org/Person">
			{/* Header Row - Responsive */}
			<header className="flex flex-wrap justify-between items-center gap-3 mb-6 md:mb-8">
				{/* Social Links */}
				<nav className="flex items-center gap-2 sm:gap-3 order-2 sm:order-1" aria-label="Social media links">
					{socialLinks.map(({ platform, url, icon: Icon, username }) => (
						<Link
							key={platform}
							href={url}
							target="_blank"
							rel="noopener noreferrer me"
							aria-label={`${platform} - Trishit Char`}
							className="text-muted-foreground hover:text-foreground transition-colors p-1 group relative block"
							itemProp="sameAs"
						>
							<Icon className="w-4 h-4 sm:w-5 sm:h-5" />

							{/* Tooltip */}
							<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 text-[10px] font-mono text-accent-foreground bg-accent rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 select-none">
								{username}
								<span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-accent" />
							</span>
						</Link>
					))}
				</nav>

				{/* Right Side Controls - Always visible, responsive sizing */}
				<div className="flex items-center gap-1 order-1 sm:order-2 w-full sm:w-auto justify-end">
					<Button variant="ghost" size="sm" className="font-mono text-xs h-8 px-2 sm:px-3" asChild>
						<Link href="/Trishit Char Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Trishit Char's Resume">
							<span className="hidden xs:inline">Resume/CV</span>
							<span className="xs:hidden">Resume/CV</span>
						</Link>
					</Button>
					<Button size="icon" variant="ghost" className="h-8 w-8" asChild>
						<Link href="/rss.xml" aria-label="Subscribe to Trishit Char's RSS feed">
							<Rss size={16} />
							<span className="sr-only">RSS feed</span>
						</Link>
					</Button>
				</div>
			</header>

			{/* Main Hero Content - Responsive Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
				{/* Left: Bio */}
				<div>
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
						Hey, I'm{" "}
						<span className="text-primary font-bold" itemProp="name">
							Tr<ThemeI mode="light" />sh<ThemeI mode="dark" />t
						</span>
					</h1>
					<p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-4 md:mb-6" itemProp="description">
						Full Stack Developer with 1.5 years of experience building AI-powered applications and scalable web solutions.


						Proficient in React.js, Node.js, and AWS cloud services. Reduced system failures by 75% and
						improved user engagement by 30% across production apps serving 10,000+ users.
					</p>

					{/* CTA Buttons - Responsive */}
					<div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
						<Button asChild className="font-mono text-xs sm:text-sm h-9 sm:h-10">
							<Link href="/contact">Get in touch</Link>
						</Button>
						<Button variant="outline" asChild className="font-mono text-xs sm:text-sm h-9 sm:h-10">
							<Link href="/projects">View work</Link>
						</Button>
					</div>

					{/* GitHub Contribution Graph - Lazy loaded */}
					<div className="mt-4">
						<GithubData />
					</div>
				</div>

				{/* Right: Skills Grid - Hidden on mobile, visible on lg+ */}
				<div className="space-y-3 md:space-y-4" aria-label="Technical Skills">
					<h2 className="text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-wider">Technical Stack</h2>
					<div className="grid grid-cols-1 gap-px bg-grid">
						{skillsConfig.map(skill => (
							<div
								key={skill.category}
								className="bg-background p-2.5 sm:p-3 hover:bg-grid-hover transition-colors"
								itemProp="knowsAbout"
							>
								<span className="text-xs font-mono text-muted-foreground block mb-0.5 sm:mb-1">{skill.category}</span>
								<span className="text-xs sm:text-sm text-foreground/80">{skill.technologies.join(' · ')}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Contact Info - Hidden but available for SEO */}
			<meta itemProp="email" content="trishitchar@gmail.com" />
			<meta itemProp="url" content="https://trishit.dev" />
			<meta itemProp="alternateName" content="Trishit" />
			<meta itemProp="alternateName" content="trishitchar" />
		</div>
	)
}
