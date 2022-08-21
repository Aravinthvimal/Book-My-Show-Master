module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '9px',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: { 
        arav: {
          50: '#f1e6ff',
          100: '#d1b8fd',
          200: '#b189f6',
          300: '#925bf1',
          400: '#732dec',
          500: '#5a13d2',
          600: '#460ea5',
          700: '#320a77',
          800: '#1e0449',
          900: '#0c001d',
        },
        navcolor: {
          50: '#efeffd',
          100: '#d0d3e4',
          200: '#b2b5cd',
          300: '#9397b8',
          400: '#757aa3',
          500: '#5b6089',
          600: '#464b6b',
          700: '#32354d',
          750: "#2B3148",
          800: '#1d2030',
          900: '#070b16',
        },
        viewcolor: 
        {
          50: '#ffe3eb',
          100: '#ffb3c2',
          200: '#fb8399',
          300: '#f95370',
          400: '#f62448',
          500: '#dc0d2f',
          600: '#ac0624',
          700: '#7c031a',
          800: '#4c000e',
          900: '#1f0003',
        },
        ratecolor: {
          50: '#fbf0f2',
          100: '#dcd8d9',
          200: '#bfbfbf',
          300: '#a6a6a6',
          400: '#8c8c8c',
          500: '#737373',
          600: '#595959',
          700: '#404040',
          750: "#333333",
          800: '#282626',
          900: '#150a0d',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
