/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          blue: '#0B4F6C',
          lightBlue: '#EBF4F8',
          darkBlue: '#052A38',
          primary: '#1A659E',
          accent: '#00A8E8',
          bg: '#F4F7F9',
        },
        semantic: {
          emergency: '#D90429',
          emergencyLight: '#FFE6E6',
          success: '#1B9AAA',
          successLight: '#E6F8F9',
          warning: '#F7B801',
          warningLight: '#FFFBE6',
          info: '#1A659E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
