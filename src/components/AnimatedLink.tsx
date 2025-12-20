"use client";

import Link from "next/link";
import { useRef, useState } from "react";

interface AnimatedLinkProps {
    href: string;
    children: string;
    hoverColor?: string;
    className?: string;
    onClick?: () => void;
}

export default function AnimatedLink({
    href,
    children,
    hoverColor = "#8b5cf6", // default violet
    className = "",
    onClick,
}: AnimatedLinkProps) {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLAnchorElement>(null);

    // Split text into characters
    const chars = children.split("");

    return (
        <Link
            ref={containerRef}
            href={href}
            className={`relative inline-block overflow-hidden cursor-pointer text-right ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            style={{
                color: isHovered ? hoverColor : "inherit",
                transition: "color 0.3s ease",
            }}
        >
            {/* Main visible text layer */}
            <span className="block relative">
                {chars.map((char, index) => (
                    <span
                        key={`main-${index}`}
                        className="inline-block"
                        style={{
                            transform: isHovered ? "translateY(-100%)" : "translateY(0)",
                            opacity: isHovered ? 0 : 1,
                            transition: `transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.02}s, opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.02}s`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </span>

            {/* Hidden layer that slides up on hover */}
            <span
                className="absolute top-0 left-0 block"
                aria-hidden="true"
            >
                {chars.map((char, index) => (
                    <span
                        key={`hover-${index}`}
                        className="inline-block"
                        style={{
                            transform: isHovered ? "translateY(0)" : "translateY(100%)",
                            opacity: isHovered ? 1 : 0,
                            transition: `transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.02}s, opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.02}s`,
                        }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </span>
        </Link>
    );
}
