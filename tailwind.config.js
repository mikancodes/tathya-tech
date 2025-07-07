/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          DEFAULT: '#007AFF',
          dark: '#0056CC',
          light: '#4DA2FF',
        },
        text: {
          primary: '#1d1d1f',
          secondary: '#86868b',
        },
        surface: {
          primary: '#ffffff',
          secondary: '#f5f5f7',
          tertiary: '#fbfbfd',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
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
        heading: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-large': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-medium': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-small': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'headline-large': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'headline-medium': ['1.75rem', { lineHeight: '1.4', letterSpacing: '0em' }],
        'headline-small': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0em' }],
        'title-large': ['1.375rem', { lineHeight: '1.4', letterSpacing: '0em' }],
        'title-medium': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'body-large': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'body-medium': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'apple': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
};