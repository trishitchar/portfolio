'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

declare global {
	interface Document {
		startViewTransition(callback: () => Promise<void> | void): {
			ready: Promise<void>
			finished: Promise<void>
			updateCallbackDone: Promise<void>
			skipTransition: () => void
		}
	}
}

export function ModeToggle() {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		if (!document.startViewTransition) {
			setTheme(theme === 'light' ? 'dark' : 'light')
			return
		}

		document.documentElement.classList.add('theme-transition-ilove')
		document.documentElement.classList.remove('theme-transition-shigure')

		document.startViewTransition(() => {
			setTheme(theme === 'light' ? 'dark' : 'light')
		})
	}

	return (
		<Button variant="outline" size="icon" onClick={toggleTheme}>
			<Sun className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
			<Moon className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
