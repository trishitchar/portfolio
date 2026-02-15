import { useRef } from "react";

export function useMechanicalKeyboardEffect() {
	const audioContextRef = useRef<AudioContext | null>(null);

	const playMechanicalSound = () => {
		try {
			if (!audioContextRef.current) {
				audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
			}

			const ctx = audioContextRef.current;
			const now = ctx.currentTime;

			// Create oscillator for click sound
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();

			osc.connect(gain);
			gain.connect(ctx.destination);

			// Mechanical click: High frequency burst
			osc.frequency.setValueAtTime(150, now);
			osc.frequency.exponentialRampToValueAtTime(80, now + 0.05);

			gain.gain.setValueAtTime(0.3, now);
			gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

			osc.start(now);
			osc.stop(now + 0.1);

			// Add a second layer for more realistic sound
			const osc2 = ctx.createOscillator();
			const gain2 = ctx.createGain();

			osc2.connect(gain2);
			gain2.connect(ctx.destination);

			osc2.frequency.setValueAtTime(100, now);
			osc2.frequency.exponentialRampToValueAtTime(50, now + 0.08);

			gain2.gain.setValueAtTime(0.2, now);
			gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

			osc2.start(now);
			osc2.stop(now + 0.08);
		} catch (e) {
			console.error("Audio playback error:", e);
		}
	};

	const triggerMechanicalFeedback = () => {
		// Haptic feedback
		if (navigator.vibrate) {
			navigator.vibrate([10, 5, 10]); // Press, gap, release pattern
		}

		// Play mechanical sound
		playMechanicalSound();
	};

	return { triggerMechanicalFeedback };
}
