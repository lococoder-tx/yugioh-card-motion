/* eslint-disable @typescript-eslint/no-explicit-any */
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette'

/** @type {import('tailwindcss').Config} */
export const content = [
  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx,mdx}',
]
export const darkMode = 'class'
export const theme = {
  extend: {
    backgroundImage: {
      'yugioh-pattern-bewd': "url('/bewd.png')",
      'yugioh-pattern-magician': "url('/darkmagician.jpg')",
      'yugioh-pattern-exodia': "url('/exodia.jpg')",
      'yugioh-pattern-back': "url('/yugioh-card-back.jpg')",
    },
    colors: {
      primary: {
        DEFAULT: '#A66DD9',
        light: '#A66DD4',
        dark: '#481380',
      },
      secondary: {
        light: 'rgb(186 180 167)',
        dark: 'rgb(53 54 56)',
      },
      tertiary: {
        light: '#2998ff',
        dark: '#5643fa',
      },
      background: {
        light: '#A66DD4',
        dark: '#481380',
      },
      white: '#fff',
      black: '#000',
      grey: {
        darker: '#eee',
        'light-1': '#f7f7f7',
        dark: '#777',
        'dark-2': '#999',
        'dark-3': '#333',
      },
    },
    clipPath: {
      'card-picture': 'polygon(50% 50%, 51% 48%, 51% 52%, 50% 50%)',
      'card-back': 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
    },
  },
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  )

  addBase({
    ':root': newVars,
  })
}

const cardUtils = function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    },
    '.clip-path-card-picture': {
      clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
    },
    '.clip-path-card-back': {
      clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)',
    },
  })
}

export const plugins = [
  '@tailwindcss/aspect-ratio',
  addVariablesForColors,
  cardUtils,
]
