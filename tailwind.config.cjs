/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1200px',
          '2xl': '1344px',
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, transparent 10%, rgba(33, 33, 33, 1) 100%)",
      },
      blur: {
        full: '194px',
      },
    },
  },
  plugins: [],
}