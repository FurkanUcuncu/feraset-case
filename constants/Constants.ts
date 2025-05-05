import { Colors } from "./Colors"
import NoStyleIcon from "@/assets/images/no-style.png";
import MonogramIcon from "@/assets/images/monogram.png";
import AbstractIcon from "@/assets/images/abstract.png";
import MascotIcon from "@/assets/images/mascot.png";
import { ILogoStyle } from "@/types/logo.types";

export const DELAY_MIN = 30000;
export const DELAY_MAX = 60000;

export const PROMPTS_PATH: string = 'prompts';

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

export const LOGO_STYLES: ILogoStyle[] = [
    { label: 'No Style', icon: NoStyleIcon },
    { label: 'Monogram', icon: MonogramIcon },
    { label: 'Abstract', icon: AbstractIcon },
    { label: 'Mascot', icon: MascotIcon },
];