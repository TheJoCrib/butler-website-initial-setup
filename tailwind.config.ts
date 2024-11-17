import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        maven_pro: ['Maven Pro', 'sans-serif']
      },
      colors: {
        primary: '#6EBA96',
        lightBlack: '#4D4D4F',
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      backgroundImage: {
        'home-bg': "url('/assets/images/BG_home.png')"
        // Define other static background images if needed
      }
    }
  },
  plugins: []
};
export default config;
