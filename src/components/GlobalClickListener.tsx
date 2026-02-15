'use client'

import { useEffect } from 'react'
import { useMechanicalKeyboardEffect } from '@/hooks/useMechanicalKeyboardEffect'

export function GlobalClickListener() {
	const { triggerMechanicalFeedback } = useMechanicalKeyboardEffect()

	useEffect(() => {
		const handleClick = () => {
			triggerMechanicalFeedback()
		}

		document.addEventListener('click', handleClick)
		return () => document.removeEventListener('click', handleClick)
	}, [triggerMechanicalFeedback])

	return null
}
