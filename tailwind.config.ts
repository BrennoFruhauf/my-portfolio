import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      primary: colors.rose,
      neutral: colors.neutral
    },
    extend: {
      fontSize: {
        heading: 'clamp(40px, 8vw, 80px)',
        subheading: 'clamp(26px, 5vw, 32px)',
        'project-title': 'clamp(24px, 5vw, 28px)',
        base: 'clamp(16px, 3vw, 20px)',
        paragraph: 'clamp(14px, 5vw, 16px)'
      },
      animation: {
        scrolldown: 'scrolldown 2.5s infinite',
        pulse: 'pulse 500ms ease infinite alternate'
      },
      keyframes: {
        scrolldown: {
          '0%': {
            opacity: '0',
            height: '0.4rem'
          },
          '40%': {
            opacity: '1',
            height: '0.5rem'
          },
          '80%': {
            transform: 'translate(50%, 6px)',
            height: '0.6rem',
            opacity: '0'
          },
          '100%': {
            height: '0.5rem',
            opacity: '0'
          }
        },
        pulse: {
          from: {
            opacity: '0'
          },
          to: {
            opacity: '0.5'
          }
        }
      }
    }
  },
  plugins: []
}
export default config
