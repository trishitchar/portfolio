'use client'
import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRef, useEffect, useState } from 'react'

export default function GithubData() {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)
	const scrollContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => setMounted(true), [])

	if (!mounted) {
		return null
	}

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const scrollAmount = 300
			scrollContainerRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div className="relative group w-full max-w-full">
			<div
				ref={scrollContainerRef}
				className="flex overflow-x-auto scroll-smooth pb-2 px-4"
			>
				<div className="mx-auto min-w-max">
					<GitHubCalendar
						colorScheme={theme === 'dark' ? 'dark' : 'light'}
						username="trishitchar"
						year={2025}
						labels={{
							totalCount: '{{count}} contributions in 2025',
						}}
					/>
				</div>
			</div>

			{/* Left Scroll Button */}
			<Button
				variant="outline"
				size="icon"
				className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full hidden md:group-hover:flex bg-background/80 backdrop-blur-sm shadow-md"
				onClick={() => scroll('left')}
				aria-label="Scroll left"
			>
				<ChevronLeft className="h-4 w-4" />
			</Button>

			{/* Right Scroll Button */}
			<Button
				variant="outline"
				size="icon"
				className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full hidden md:group-hover:flex bg-background/80 backdrop-blur-sm shadow-md"
				onClick={() => scroll('right')}
				aria-label="Scroll right"
			>
				<ChevronRight className="h-4 w-4" />
			</Button>
		</div>
	)
}
