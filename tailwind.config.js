/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cardBg: '#edf3f4',
        postsDiv: '#0017ff',
        nabar: '#363636'
      },
      fontFamily: {
        readEx: ['var[--font-read-ex]'],
        roboto: ['var[--font-roboto]'],
      }
    },
  },
  plugins: [],
};
