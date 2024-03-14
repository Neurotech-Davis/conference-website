/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // add the css variable and include fallback fonts from tailwind default theme
        // sans: ['var(--font-sans)', ...fontFamily.sans],
        // serif: ['var(--font-serif)', ...fontFamily.serif],
        // mono: ['var(--font-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
}

