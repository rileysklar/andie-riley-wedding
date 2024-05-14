/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#a14a76",
        "accent-dark": "#fab2ea",
        black: "#28262c",
        gray: "#b7c8b5",
        "gray-light": "#fbfbf2",
        "gray-dark": "#28262c",
      },
    },
  },
  variants: {},
  plugins: [],
};
