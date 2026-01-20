/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'tech-blue': '#0062FF',
          'deep-navy': '#0A192F',
        },
      },
    },
    plugins: [],
  }
  