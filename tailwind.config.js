

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'purpleLight': '#e1bee7',
        'purpleDark': '#6a1b9a',
        'textGrey':'rgb(75 85 99 / var(--tw-text-opacity))',
        'lightGrey':'#9e9e9e',
        'textPurple':'text-purple-600',
      },
    },
  },
  plugins: [],
}
