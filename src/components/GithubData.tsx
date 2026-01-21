'use client'
import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'
import { useEffect, useState } from 'react'

export default function GithubData() {
	const { theme } = useTheme()
	const [mounted, setMounted] = useState(false)
	useEffect(() => setMounted(true), [])

	if (!mounted) {
		return null
	}

	return (
		<div className="flex justify-center">
			<GitHubCalendar
				colorScheme={theme === 'dark' ? 'dark' : 'light'}
				username="trishitchar"
				year={2025}
				labels={{
					totalCount: '{{count}} contributions in 2025',
				}}
			/>
		</div>
	)
}
