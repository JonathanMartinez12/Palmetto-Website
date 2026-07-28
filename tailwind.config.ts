import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palm — dark forest green sampled from the logo palm/wordmark
        // subtitle. Used as the dominant dark UI chrome (header, footer,
        // hero, dark sections) so the site reads green-first like the logo.
        palm: {
          DEFAULT: '#2F5E46',
          50: '#E6F0EA',
          100: '#CCE0D4',
          200: '#99C2AA',
          300: '#66A37F',
          400: '#3F805C',
          500: '#2F5E46',
          600: '#264C38',
          700: '#1D392A',
          800: '#13261C',
          900: '#0A130E',
        },
        // Palmetto Maroon — secondary brand color from the brand guide.
        // Used for select headings and accents that need a cool contrast
        // against palm green and cream backgrounds.
        maroon: {
          DEFAULT: '#324173',
          50: '#E8EBF1',
          100: '#D1D6E2',
          200: '#A4ADC6',
          300: '#7785A9',
          400: '#4A5C8D',
          500: '#324173',
          600: '#28345C',
          700: '#1E2745',
          800: '#141A2E',
          900: '#0A0D17',
        },
        // Palmetto Cloud — accent / CTA red
        cloud: {
          DEFAULT: '#C73629',
          50: '#F9E6E4',
          100: '#F3CCC9',
          200: '#E79993',
          300: '#DB665D',
          400: '#CF3327',
          500: '#C73629',
          600: '#9F2B21',
          700: '#772019',
          800: '#501610',
          900: '#280B08',
        },
        // Palmetto Flame — warm gold accent
        flame: {
          DEFAULT: '#E4AD3C',
          50: '#FBF1DC',
          100: '#F8E4B8',
          200: '#F1C971',
          300: '#EABF55',
          400: '#E4AD3C',
          500: '#E4AD3C',
          600: '#B68A30',
          700: '#876724',
          800: '#5A4518',
          900: '#2D220C',
        },
        // Palmetto Burnt — burnt orange accent
        burnt: {
          DEFAULT: '#C75B24',
          50: '#F9E7DD',
          100: '#F3CFBB',
          200: '#E79F76',
          300: '#DB7032',
          400: '#C75B24',
          500: '#C75B24',
          600: '#9F491D',
          700: '#773715',
          800: '#50240E',
          900: '#281207',
        },
        // Palmetto Stone — neutral gray
        stone: {
          DEFAULT: '#687078',
          50: '#EEEFF1',
          100: '#DDDFE2',
          200: '#BBBFC5',
          300: '#999FA8',
          400: '#777F8B',
          500: '#687078',
          600: '#535A60',
          700: '#3E4348',
          800: '#2A2D30',
          900: '#151618',
        },
        // Palmetto Light — soft sage (logo accent)
        light: {
          DEFAULT: '#8FBC9A',
          50: '#F2F8F3',
          100: '#E5F1E8',
          200: '#CBE3D0',
          300: '#B1D5B9',
          400: '#A0C7A8',
          500: '#8FBC9A',
          600: '#65A073',
          700: '#4D7C58',
          800: '#34543B',
          900: '#1A2A1E',
        },
        // Off-white panel background retained from the design system
        cream: {
          DEFAULT: '#FAF8F5',
          50: '#FFFFFF',
          100: '#FAF8F5',
          200: '#F5F1EA',
          300: '#F0EADF',
          400: '#EBE3D4',
        },
      },
      // Palatino site-wide, 100%. `palatino` is the canonical alias used by
      // globals.css (`@apply font-palatino`); `sans`, `serif` and `avenir` all
      // resolve to the identical stack so no stray utility class can
      // reintroduce a second typeface.
      //
      // Palatino is a system font, not a webfont: it ships with Windows
      // (Palatino Linotype / Book Antiqua) and macOS + iOS (Palatino), but NOT
      // Android, Linux or ChromeOS. Gelasio sits in the stack as the loaded
      // Google webfont fallback for those platforms — it is metric-compatible
      // with Georgia, so it drops in cleanly ahead of the Georgia fallback
      // rather than letting the device pick an arbitrary serif.
      fontFamily: {
        palatino: ['Palatino Linotype', 'Palatino', 'Book Antiqua', 'Gelasio', 'Georgia', 'serif'],
        sans: ['Palatino Linotype', 'Palatino', 'Book Antiqua', 'Gelasio', 'Georgia', 'serif'],
        serif: ['Palatino Linotype', 'Palatino', 'Book Antiqua', 'Gelasio', 'Georgia', 'serif'],
        avenir: ['Palatino Linotype', 'Palatino', 'Book Antiqua', 'Gelasio', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'scroll-infinite': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'hero-pan': {
          '0%': { transform: 'scale(1.05) translateX(0)' },
          '100%': { transform: 'scale(1.12) translateX(-2%)' },
        },
      },
      animation: {
        'scroll-infinite': 'scroll-infinite 30s linear infinite',
        'hero-pan': 'hero-pan 12s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
export default config
