import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Add all files in src/app and subfolders
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C2410C', // Afthonios orange
      },
    },
  },
  plugins: [],
}

export default config