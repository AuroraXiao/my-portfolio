import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#111111',
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#666666',
        },
        border: '#e5e5e5',
        accent: {
          DEFAULT: '#111111',
          foreground: '#ffffff',
        },
      },
      boxShadow: {
        subtle: '0 4px 16px rgba(0,0,0,0.06)',
        card: '0 6px 24px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        scrollPreview: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        scrollPreview: 'scrollPreview 12s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;


