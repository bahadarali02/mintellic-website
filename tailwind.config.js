module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0E0E0E',
          800: '#212121',
          900: '#0A0A0A'
        },
        orange: {
          DEFAULT: '#FF6B00',
          100: '#FFEEE5',
          600: '#E65C00',
          800: '#662B00'
        },
        light: {
          DEFAULT: '#EAEAEA',
          100: '#FFFFFF',
          200: '#F5F5F5'
        },
        gray: {
          DEFAULT: '#565656',
          100: '#F5F5F5',
          300: '#D1D1D1',
          500: '#808080',
          800: '#212121'
        }
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)'],
        inter: ['var(--font-inter)']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'text-gradient': 'text-gradient 8s ease infinite',
        'fade-in': 'fade-in 1.2s cubic-bezier(0.4, 0, 0.6, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, fill, stroke',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ]
}