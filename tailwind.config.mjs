import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Cyber/Tech palette
                'cyber-black': '#0a0a0a',
                'cyber-dark': '#121212',
                'cyber-gray': '#1e1e1e',
                'cyber-primary': '#00ff9d', // Neon Green
                'cyber-secondary': '#7000ff', // Vivid Purple
                'cyber-accent': '#00d0ff', // Cyan
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        },
    },
    plugins: [
        typography,
    ],
    darkMode: 'class',
}
