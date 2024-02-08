import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: ({ theme }) => ({
        'gradient-primary': `linear-gradient(to right, ${theme('colors.pink.800')}, ${theme('colors.red.500')}, ${theme(
          'colors.yellow.500',
        )})`,
      }),
      colors: {
        grey: { dark: '#191919' },
        yellow: { main: '#F5B200' },
        cream: '#F4F4DE',
      },
    },
  },
  plugins: [],
};
export default config;
