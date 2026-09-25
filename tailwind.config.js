/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0C0B0A",
        charcoal: "#161514",
        graphite: "#23211F",
        stoneborder: "#332F2B",
        ivory: "#EDE8E1",
        bone: "#C8C2B7",
        terracotta: "#B3542B",
        burnished: "#8E401E",
        copper: "#C76A3D",
        accentDim: "#442113",
      },
      fontFamily: {
        serif: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'grain': 'radial-gradient(circle at 50% 50%, rgba(200, 194, 183, 0.03) 0%, rgba(12, 11, 10, 0.95) 100%)',
      }
    },
  },
  plugins: [],
}