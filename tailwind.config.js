module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      sans: ['Inter'],
      serif: ['Playfair Display'],
    },
    extend: {
      colors: {
        primary: {
          100: '#2196f3',
          200: '#C642CF',
          300: '#A938B1',
          400: '#8D2E94',
          500: '#712476',
          600: '#541A59',
          700: '#38113B',
          800: '#1C071E',
        },
        secondary: {
          DEFAULT: '#2196f3',
        },
        tertiary: {
          DEFAULT: '#e91e63',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        dark: {
          DEFAULT: '#151515',
          100: '#001279',
          200: '#001dc2',
        },
      },
    },
  },
  plugins: [],
}

// /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#a3bcf9+0,d1d2f9+100 */
// background: #a3bcf9; /* Old browsers */
// background: -moz-linear-gradient(top,  #a3bcf9 0%, #d1d2f9 100%); /* FF3.6-15 */
// background: -webkit-linear-gradient(top,  #a3bcf9 0%,#d1d2f9 100%); /* Chrome10-25,Safari5.1-6 */
// background: linear-gradient(to bottom,  #a3bcf9 0%,#d1d2f9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3bcf9', endColorstr='#d1d2f9',GradientType=0 ); /* IE6-9 */
