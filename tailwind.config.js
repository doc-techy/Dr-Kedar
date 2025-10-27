/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '4xl': '1440px',
        '5xl': '1920px',
        '6xl': '2560px',
        '7xl': '3840px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '112rem',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
    },
  },
  plugins: [],
} 