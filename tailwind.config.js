/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-orange-500',
    'text-green-500',
    'text-sky-500',
    'text-red-500',
    'text-rose-500',
    'text-violet-500',
    'text-teal-500',
    'text-blue-500',
    'text-sky-400',
    'text-red-400',
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        mova: "mova"
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%', // add required value here
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
