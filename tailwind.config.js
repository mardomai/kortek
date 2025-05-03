/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',    // Deep blue
        secondary: '#475569',  // Slate gray
        light: '#F8FAFC',     // Light gray/white
        accent: '#2563EB',    // Bright blue
        'accent-dark': '#1D4ED8', // Darker blue
        'neutral': '#94A3B8',  // Medium gray
      },
    },
  },
  plugins: [],
} 