/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf7ff',
          100: '#f3ecff',
          200: '#e6d9ff',
          300: '#d1b8ff',
          400: '#b287ff',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px 0 rgba(124, 58, 237, 0.06), 0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        card: '0 4px 16px -2px rgba(124, 58, 237, 0.10), 0 2px 4px -1px rgba(15, 23, 42, 0.04)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
