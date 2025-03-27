 /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        'made-evolve-sans': ['MADE Evolve Sans', 'sans-serif'],
      },
      colors: {
        customBg: "#F7F7F7", // Add custom background color
      },
    },
  },
  plugins: [],
}
