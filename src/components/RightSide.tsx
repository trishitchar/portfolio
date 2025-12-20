"use client";

import { useState } from "react";
import AnimatedLink from "./AnimatedLink";
import { Menu, X } from "lucide-react";

export default function RightSide() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Desktop Navigation - always visible */}
            <nav className="hidden md:flex md:flex-col md:items-end font-mono text-sm uppercase text-foreground font-semibold">
                <AnimatedLink href="/" hoverColor="#8b5cf6">Home</AnimatedLink>
                <AnimatedLink href="/experience" hoverColor="#f97316">Experience</AnimatedLink>
                <AnimatedLink href="/projects" hoverColor="#14b8a6">Projects</AnimatedLink>
                <AnimatedLink href="/contact" hoverColor="#ec4899">Contact</AnimatedLink>
                <AnimatedLink href="/faq" hoverColor="#eab308">FAQ</AnimatedLink>
            </nav>

            {/* Mobile: Minimal hamburger that matches site aesthetic */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* Mobile dropdown - positioned below the button, right-aligned */}
                {isOpen && (
                    <nav className="absolute right-0 top-full mt-2 py-3 px-4 bg-background border border-border shadow-lg min-w-[140px] flex flex-col items-end gap-2 font-mono text-sm uppercase text-foreground font-semibold whitespace-nowrap">
                        <AnimatedLink href="/" hoverColor="#8b5cf6" onClick={closeMenu}>Home</AnimatedLink>
                        <AnimatedLink href="/experience" hoverColor="#f97316" onClick={closeMenu}>Experience</AnimatedLink>
                        <AnimatedLink href="/projects" hoverColor="#14b8a6" onClick={closeMenu}>Projects</AnimatedLink>
                        <AnimatedLink href="/contact" hoverColor="#ec4899" onClick={closeMenu}>Contact</AnimatedLink>
                        <AnimatedLink href="/faq" hoverColor="#eab308" onClick={closeMenu}>FAQ</AnimatedLink>
                    </nav>
                )}
            </div>
        </>
    );
}