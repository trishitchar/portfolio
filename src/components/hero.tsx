import { siteConfig } from '@/configs/site.config'
import Link from 'next/link'
import { Rss } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { skillsConfig } from '@/configs/skills.config'
import { ModeToggle } from './theme/theme-toggle'

export default function Hero() {
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm font-light">Trishit Char</h1>
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
      <p className="my-6 max-w-2xl text-foreground/80">
        Hey there! I'm Trishit Char, a full stack developer.
      </p>
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {skillsConfig.map(skill => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">
              {skill.category}:
            </span>{' '}
            {skill.technologies.join(', ')}
          </p>
        ))}
      </div>
    </section>
  )
}
