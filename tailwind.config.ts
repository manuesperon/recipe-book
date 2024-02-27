import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '481px',
      },
      backgroundImage: ({ theme }) => ({
        underline: `linear-gradient(to right, ${theme('colors.yellow.main')}, ${theme('colors.yellow.main')})`,
        'text-strike': `linear-gradient(to right, ${theme('colors.cream.light')}, ${theme('colors.cream.light')})`,
      }),
      colors: {
        grey: { dark: '#191919' },
        yellow: { main: '#F5B200' },
        red: { main: '#EA261A' },
        cream: { DEFAULT: '#F4F4DE', light: '#91918a' },
      },
      fontFamily: {
        Degular: ['degular', 'sans-serif'],
      },
      keyframes: {
        slideFromLeft: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slideFromLeft: 'slideFromLeft 0.5s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
