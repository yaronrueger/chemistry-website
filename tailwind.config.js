/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Light theme colors
        'light-bg': '#ffffff',
        'light-text': '#171717',
        'light-gray': '#f8fafc',
        // Dark theme colors
        'dark-bg': '#0a0a0a',
        'dark-text': '#ededed',
        'dark-gray': '#1f2937',
      },
    },
  },
  plugins: [],
}
