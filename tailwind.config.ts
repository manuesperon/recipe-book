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
      }),
      colors: {
        grey: { dark: '#191919' },
        yellow: { main: '#F5B200' },
        red: { main: '#EA261A' },
        cream: '#F4F4DE',
      },
      fontFamily: {
        Degular: ['degular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
