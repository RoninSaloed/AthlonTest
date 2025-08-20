/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'second-blue': '#0062FF',
      },
    },
  },
  plugins: [],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
