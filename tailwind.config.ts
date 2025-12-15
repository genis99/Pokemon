/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1920px',
      },
      colors: {
        fire: '#F08030',
        water: '#6890F0',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F85888',
        rock: '#B8A038',
        ground: '#E0C068',
        ice: '#98D8D8',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
      },
      fontFamily: {
        heading: ['"Press Start 2P"', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
  important: true,
}
