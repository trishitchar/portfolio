"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface ThemeIProps {
    mode: "light" | "dark"
    className?: string
}

export function ThemeI({ mode, className }: ThemeIProps) {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const isActive = mounted && theme === mode

    return (
        <span className={cn("inline-flex flex-col items-center justify-end font-sans leading-none relative -top-[0.35em] cursor-pointer group", className)}>
            {/* Easter Egg Tooltip */}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 text-xs font-mono text-accent-foreground bg-accent rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 select-none">
                {mode === "light" ? "This is for you cutie 🌸" : "Hi, I'm actually Batman (◣_◢)"}
                <span className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-accent" />
            </span>
            <button
                onClick={() => setTheme(mode)}
                className="p-[0.3em] -mt-[0.3em] -mx-[0.3em] -mb-[0.2em] transition-all hover:scale-110 active:scale-95 group animate-bounce cursor-pointer"
                aria-label={`Switch to ${mode} mode`}
            >
                <span className="sr-only">Switch to {mode} mode</span>
                {mode === "light" ? (
                    <Sun
                        className={cn(
                            "w-[0.35em] h-[0.35em]",
                            isActive ? "fill-current text-primary" : "text-muted-foreground opacity-50 hover:opacity-100"
                        )}
                        strokeWidth={2.5}
                    />
                ) : (
                    <Moon
                        className={cn(
                            "w-[0.35em] h-[0.35em]",
                            isActive ? "fill-current text-primary" : "text-muted-foreground opacity-50 hover:opacity-100"
                        )}
                        strokeWidth={2.5}
                    />
                )}
            </button>
            {/* The Stem of the 'i' */}
            <span className="w-[0.14em] h-[0.55em] bg-current rounded-sm" />
        </span>
    )
}
