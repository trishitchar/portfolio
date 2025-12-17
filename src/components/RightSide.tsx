import AnimatedLink from "./AnimatedLink";

export default function RightSide() {
    return (
        <nav className="flex flex-col items-end font-mono text-sm uppercase text-foreground font-semibold">
            <AnimatedLink href="/" hoverColor="#8b5cf6">Home</AnimatedLink>
            <AnimatedLink href="/experience" hoverColor="#f97316">Experience</AnimatedLink>
            <AnimatedLink href="/projects" hoverColor="#14b8a6">Projects</AnimatedLink>
            <AnimatedLink href="/contact" hoverColor="#ec4899">Contact</AnimatedLink>
            <AnimatedLink href="/faq" hoverColor="#eab308">FAQ</AnimatedLink>
        </nav>
    )
}