/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#eff6ff',
          200: '#dbeafe',
          300: '#bfdbfe',
          400: '#93c5fd',
          500: '#60a5fa',
          600: '#3b82f6',
          700: '#2563eb',
          800: '#1d4ed8',
          900: '#1e3a8a',
        },
        accent: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#60a5fa',
        },
        text: {
          primary: '#1e3a8a',
          secondary: '#3b82f6',
        },
        success: {
          50: '#ecfdf5',
          500: '#10b981',
          700: '#047857',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-up': 'fadeInUp 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-out-up': 'fadeOutUp 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 20px, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        fadeOutUp: {
          '0%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translate3d(0, -20px, 0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '50%': {
            transform: 'translate3d(0, -3px, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};