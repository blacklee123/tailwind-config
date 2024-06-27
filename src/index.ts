import path from 'node:path'
import type { Config } from 'tailwindcss'
import { addDynamicIconSelectors } from '@iconify/tailwind'

const config: Config = {
  darkMode: ['class'],
  important: true,
  content: [
    path.join(path.dirname(require.resolve('@qaq-public/components-react')), '**/*.{html,js,ts,vue,jsx,tsx}'),
    './src/**/*.{html,js,ts,vue,jsx,tsx}',
    './index.html',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        primary: {
          DEFAULT: '#23ade5',
        },
        dark: {
          DEFAULT: '#141414',
        },
        border: {
          DEFAULT: '#d9d9d9',
          dark: '#424242',
        },
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1600px',
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

export default config
