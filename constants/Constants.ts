import { Colors } from "./Colors"

export const GRADIENT = {
    light: {
        start: { x: 1, y: 0 },
        end: { x: 0, y: 0 },
        locations: [0, 0.2459, 1] as [number, number, number]
    },
    dark: {
        start: { x: 1, y: 0.5 },
        end: { x: 0, y: 0.5 }
    }
}

export const IMAGE_PROCESS = {
    loading: {
        title: 'Creating Your Design...',
        subtitle: 'Ready in 2 minutes',
        titleColor: Colors.light.text,
        subtitleColor: '#71717A',
        background: 'dark'
    },
    success: {
        title: 'Your Design is Ready!',
        subtitle: 'Tap to see it.',
        titleColor: Colors.light.text,
        subtitleColor: '#D4D4D8',
        background: 'light'
    },
    error: {
        title: 'Oops, something went wrong!',
        subtitle: 'Click to try again.',
        titleColor: Colors.light.text,
        subtitleColor: '#D4D4D8',
        background: '#EF4444'
    }
}