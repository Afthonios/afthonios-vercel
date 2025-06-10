import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // Enable dark mode via the 'dark' class on <html>
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Add all files in src/app and subfolders
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C2410C', // Main orange
          light: '#f97316',   // Light orange for dark mode text
        },
        background: {
          white: '#ffffff',
          gray: {
            100: '#f3f4f6',
            200: '#e5e7eb',
          },
          dark: {
            800: '#1f2937', // Slate-like dark background
            900: '#0f172a', // Very dark background
          },
        },
        text: {
          DEFAULT: '#111827',  // Default dark text
          inverted: '#ffffff', // For dark mode text
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Georgia', 'serif'],         // used for h2
        subheading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], // used for h3 (sans-serif font)
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // ~36px
        h2: ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // ~30px
        h3: ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }], // ~14px
        h4: ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }], // ~20px
      },
    },
  },
  plugins: [typography],
}

export default config