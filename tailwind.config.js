/**
 * Tailwind config — production build for Precision Health GROUP (parent brand).
 * Mirrors the inline config in index.html and assets/js/tailwind-config.js.
 */
module.exports = {
  content: [
    './*.html',
    './pages/**/*.html',
    './assets/js/**/*.js',
    // WordPress paths once integrated
    './wp-content/themes/prcn/**/*.php',
    './wp-content/themes/prcn/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        forest: {
          50: '#EEF3F0', 100: '#D7E2DB', 200: '#A8C0AF', 300: '#739783',
          400: '#456E58', 500: '#234F3D', 600: '#173E2F', 700: '#0E3B33',
          800: '#092A24', 900: '#051A16',
        },
        clay: {
          50: '#FAF1EC', 100: '#F2DDD0', 200: '#E5B59E', 300: '#D08A6A',
          400: '#C26B4A', 500: '#A8542F', 600: '#883F22',
        },
        ivory: '#F8F4EC',
        bone:  '#EEE6D6',
        ink:   '#0A1410',
      },
      boxShadow: {
        paper: '0 1px 0 rgba(10,20,16,.04), 0 30px 60px -30px rgba(10,20,16,.18)',
      },
      letterSpacing: { tightest: '-0.04em' },
      animation: {
        'fade-up': 'fadeUp .9s cubic-bezier(.2,.8,.2,1) forwards',
        marquee:   'marquee 50s linear infinite',
      },
      keyframes: {
        fadeUp:  { '0%': { opacity: 0, transform: 'translateY(28px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
};
