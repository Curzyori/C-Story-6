/** 
 * C Story | Tailwind Config
 * 
 * Note: C Story is using Tailwind CSS v4, which is CSS-first.
 * Variables, themes, and plugins are natively configured inside `src/styles/global.css`.
 * This file is retained for backward compatibility with certain plugins or IDE extensions.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-dark': '#0a0a0a',
        'neon-green': '#10b981',
      },
    },
  },
  plugins: [],
};
