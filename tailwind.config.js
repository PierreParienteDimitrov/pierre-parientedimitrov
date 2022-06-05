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
          DEFAULT: '#2196F3',
          200: '#3DA3F5',
          300: '#59B0F6',
          400: '#74BDF8',
          500: '#90CAF9',
          600: '#ACD8FB',
          700: '#C7E5FC',
          800: '#E3F2FE',
        },
        secondary: {
          DEFAULT: '#E91E63',
          200: '#EC3A76',
          300: '#EE568A',
          400: '#F1729D',
          500: '#F48FB1',
          600: '#F7ABC4',
          700: '#FAC7D8',
          800: '#FCE3EB',
        },
        tertiary: {
          DEFAULT: '#FF00FF',
          200: '#FF20FF',
          300: '#FF40FF',
          400: '#FF60FF',
          500: '#FF80FF',
          600: '#FF9FFF',
          700: '#FFBFFF',
          800: '#FFDFFF',
        },
        quaternary: {
          DEFAULT: '#FF0000',
          200: '#FF2020',
          300: '#FF4040',
          400: '#FF6060',
          500: '#FF8080',
          600: '#FF9F9F',
          700: '#FFBFBF',
          800: '#FFDFDF',
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
          DEFAULT: '#021321',
          100: '#053357',
          200: '#0965AF',
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
