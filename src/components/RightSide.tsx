"use client";

import { useState } from "react";
import AnimatedLink from "./AnimatedLink";
import { Menu, X } from "lucide-react";
import { useMechanicalKeyboardEffect } from "@/hooks/useMechanicalKeyboardEffect";

export default function RightSide() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const { triggerMechanicalFeedback } = useMechanicalKeyboardEffect();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const handleKeyboardClick = () => {
        triggerMechanicalFeedback();
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 150);
    };

    return (
        <>
            {/* Desktop Navigation - always visible */}
            <nav className="hidden md:flex md:flex-col md:items-end font-mono text-sm uppercase text-foreground font-semibold">
                <AnimatedLink href="/" hoverColor="var(--nav-accent-1)">Home</AnimatedLink>
                <AnimatedLink href="/experience" hoverColor="var(--nav-accent-2)">Experience</AnimatedLink>
                <AnimatedLink href="/projects" hoverColor="var(--nav-accent-3)">Projects</AnimatedLink>
                <AnimatedLink href="/contact" hoverColor="var(--nav-accent-4)">Contact</AnimatedLink>
                <AnimatedLink href="/faq" hoverColor="var(--nav-accent-5)">FAQ</AnimatedLink>
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
                        <AnimatedLink href="/" hoverColor="var(--nav-accent-1)" onClick={closeMenu}>Home</AnimatedLink>
                        <AnimatedLink href="/experience" hoverColor="var(--nav-accent-2)" onClick={closeMenu}>Experience</AnimatedLink>
                        <AnimatedLink href="/projects" hoverColor="var(--nav-accent-3)" onClick={closeMenu}>Projects</AnimatedLink>
                        <AnimatedLink href="/contact" hoverColor="var(--nav-accent-4)" onClick={closeMenu}>Contact</AnimatedLink>
                        <AnimatedLink href="/faq" hoverColor="var(--nav-accent-5)" onClick={closeMenu}>FAQ</AnimatedLink>
                    </nav>
                )}
            </div>
            {/* Bottom-right emblem */}
            <div className="fixed bottom-1 right-1 sm:right-1 md:-bottom-6 md:-right-4 z-50 flex flex-col items-end hover:cursor-pointer">
                <img
                    src="/trishit.png"
                    alt="site emblem"
                    className="hidden md:block mt-2 w-60 h-60 rounded-md shadow-md object-cover transition-transform duration-150"
                    style={{
                        transform: isPressed ? "scaleY(0.92) translateY(12px)" : "scaleY(1) translateY(0)",
                    }}
                    onClick={handleKeyboardClick}
                />
            </div>
        </>
    );
}