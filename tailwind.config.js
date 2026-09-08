/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          soft: 'rgb(var(--ink-soft) / <alpha-value>)',
          muted: 'rgb(var(--ink-muted) / <alpha-value>)',
          faint: 'rgb(var(--ink-faint) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          deep: 'rgb(var(--accent-deep) / <alpha-value>)',
          tint: 'rgb(var(--accent-tint) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        slab: ['"Roboto Slab"', 'Roboto', 'ui-serif', 'serif'],
      },
      maxWidth: { content: '58rem', prose: '46rem' },
      letterSpacing: { tightish: '-0.01em' },
    },
  },
  plugins: [],
}
