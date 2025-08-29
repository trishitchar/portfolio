import { siteConfig } from '@/configs/site.config'
import Link from 'next/link'
import { Rss } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { skillsConfig } from '@/configs/skills.config'
import { ModeToggle } from './theme/theme-toggle'
import { socialLinks } from '@/configs/social.config'

export default function Hero() {
	return (
		<section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
			<Link href="/">
				<span className="font-mono text-sm underline">{siteConfig.name}</span>
			</Link>

			{/* Header Row */}
			<div className="flex justify-between items-center mt-6">
				<div>
					<h1 className="head-text-sm font-light">Trishit Char</h1>

					{/* Social Links Below Name */}
					<div className="flex items-center gap-3 mt-3">
						{socialLinks.map(({ platform, url, icon: Icon }) => (
							<Link key={platform} href={url} target="_blank" rel="noopener noreferrer" aria-label={platform} className="text-foreground font-semibold hover:text-primary transition-colors">
								<Icon className="w-5 h-5" />
							</Link>
						))}
					</div>
				</div>

				{/* Right Side Controls */}
				<div className="flex items-center gap-2">
					<Button size="icon" variant="ghost" className="rounded-full" asChild>
						<Link href="/feed">
							<Rss size={18} />
							<span className="sr-only">rss feed</span>
						</Link>
					</Button>
					<ModeToggle />
				</div>
			</div>

			{/* Bio */}
			<p className="my-6 max-w-2xl text-foreground/80">Hey there! I'm Trishit Char, a full stack developer.</p>

			{/* Skills Section */}
			<div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
				{skillsConfig.map(skill => (
					<p key={skill.category}>
						<span className="font-semibold text-primary/90">{skill.category}:</span> {skill.technologies.join(', ')}
					</p>
				))}
			</div>
		</section>
	)
}
