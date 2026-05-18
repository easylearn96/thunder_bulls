/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'thunder-gold':    '#FFC107',
        'storm-black':     '#0A0A0A',
        'bull-crimson':    '#B91C1C',
        'lightning-white': '#FFFFFF',
        'electric-blue':   '#1E3A5F',
        'ash-grey':        '#404040',
        'gold-glow':       'rgba(255, 193, 7, 0.3)',
        'crimson-dark':    '#7F1D1D',
        'black-soft':      '#111111',
        'black-card':      '#181818',
        'black-overlay':   'rgba(10, 10, 10, 0.85)',
      },
      fontFamily: {
        oswald:  ['Oswald', 'sans-serif'],
        barlow:  ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
