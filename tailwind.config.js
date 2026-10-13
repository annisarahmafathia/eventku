const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: v('paper'),
        surface: v('surface'),
        ink: v('ink'),
        muted: v('muted'),
        line: v('line'),
        brand: v('brand'),
        'brand-ink': v('brand-ink'),
        lomba: v('lomba'),
        seminar: v('seminar'),
        workshop: v('workshop'),
        kepanitiaan: v('kepanitiaan'),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Public Sans Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
