/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,  // keep Docusaurus/Infima base styles intact
    container: false,  // let Docusaurus handle container widths
  },
  darkMode: ['selector', '[data-theme="dark"]'],  // match Docusaurus theme attribute
  theme: {
    extend: {},
  },
  plugins: [],
};
