/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if using other file extensions
  ],
  theme: {
    extend: {
      // Add custom theme extensions here
      colors: {
        primary: '#3b82f6', // Example custom color
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here
    // require('@tailwindcss/forms'), // Example plugin
  ],
}