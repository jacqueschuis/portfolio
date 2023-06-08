/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black': '#262626',
        'grey': '#c4c4c4',
        'white': '#f2f2f2',
        'blue': {
          light:'#2a9d8f',
          dark: '#264653'
        },
        'orange': {
          light: '#e9c46a',
          DEFAULT: '#f4a261',
          dark: '#e76f51'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'hero-lg': ['calc(50px + (120 - 50) * ((100vw - 200px) / (1440 - 200)))', {
          lineHeight: '1'
        }],
        'hero-sm': ['calc(30px + (75 - 30) * ((100vw - 200px) / (1440 - 200)))', {
          lineHeight: '1'
        }],
        'hamburger': ["calc(50px + (75 - 50) * ((100vw - 100px) / (800 - 200)))", {
          lineHeight: '1'
        }]
      }
    },
    },
    
  plugins: [],
}
