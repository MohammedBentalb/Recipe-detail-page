import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: 'var(--outfit)',
        youngSerif: 'var(--youngSerif)',
      },
      colors: {
        brandyRed: 'hsl(var(--brandyRed))',
        darkCharcoal: 'hsl(var(--darkCharcoal))',
        darkRaspberry: 'hsl(var(--darkRaspberry))',
        snow: 'hsl(var(--snow))',
        wengeBrown: 'hsl(var(--wengeBrown))',
        whiteCoffee: 'hsl(var(--whiteCoffee))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
