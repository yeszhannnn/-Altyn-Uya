/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d8ff',
          300: '#a4bfff',
          400: '#7c9aff',
          500: '#5b7aff',
          600: '#3d5aff',
          700: '#2e45e8',
          800: '#1e2fb8',
          900: '#172a8f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'lg': '0 16px 48px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
}
