/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1F1F1F',
        red: '#FF5252',
        darkAccent: '#161616',
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive']
      }
    },
  },
  plugins: [],
}
