import Link from 'next/link'
import { Rss } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { skillsConfig } from '@/configs/skills.config'
import { ModeToggle } from './theme/theme-toggle'
import { socialLinks } from '@/configs/social.config'

export default function Hero() {
	return (
		<section className="w-full flex flex-col px-4 py-1 space-y-7" itemScope itemType="https://schema.org/Person">
			{/* Header Row */}
			<header className="flex justify-between items-center mt-6 ">
				<div>
					{/* Social Links Below Name */}
					<nav className="flex items-center gap-3 mt-3" aria-label="Social media links">
						{socialLinks.map(({ platform, url, icon: Icon }) => (
							<Link 
								key={platform} 
								href={url} 
								target="_blank" 
								rel="noopener noreferrer me" 
								aria-label={`${platform} - Trishit Char`} 
								className="text-foreground font-semibold hover:text-primary transition-colors"
								itemProp="sameAs"
							>
								<Icon className="w-5 h-5" />
							</Link>
						))}
					</nav>
				</div>

				{/* Right Side Controls */}
				<div className="flex items-center gap-2">
					{/* resume in public */}
					<Button variant="ghost" className="rounded-full" asChild>
						<Link href="/Trishit Char Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Trishit Char's Resume">
							<span className="font-mono text-sm">Resume</span>								
						</Link>
					</Button>
					{/* rss feed */}
					<Button size="icon" variant="ghost" className="rounded-full" asChild>
						<Link href="/rss.xml" aria-label="Subscribe to Trishit Char's RSS feed">
							<Rss size={18} />
							<span className="sr-only">RSS feed</span>
						</Link>
					</Button>
					<ModeToggle />
				</div>
			</header>

			{/* Bio */}
			<article className="text-foreground/80" itemProp="description">
				<p className="mb-3">
					Hey there! I'm <strong itemProp="name">Trishit Char</strong> Full Stack Developer with 1.5 years of professional experience building AI-powered applications and scalable web solutions. Proficient in React.js, Node.js, and AWS cloud services, with expertise in GenAI integration and performance optimization. Proven track record of reducing system failures by 75% and improving user engagement by 30% across production applications serving 10,000+ users.
				</p>
			</article>

			{/* Skills Section */}
			<section className="flex-col text-sm space-y-2 rounded text-foreground/70" aria-label="Technical Skills">
				<h2 className="text-base font-semibold text-primary mb-3">Technical Expertise</h2>
				{skillsConfig.map(skill => (
					<p key={skill.category} itemProp="knowsAbout">
						<span className="font-semibold text-primary/90">{skill.category}:</span> {skill.technologies.join(', ')}
					</p>
				))}
			</section>

			{/* Contact Info - Hidden but available for SEO */}
			<meta itemProp="email" content="trishitchar@gmail.com" />
			<meta itemProp="url" content="https://trishit.dev" />
			<meta itemProp="alternateName" content="Trishit" />
			<meta itemProp="alternateName" content="trishitchar" />
		</section>
	)
}
