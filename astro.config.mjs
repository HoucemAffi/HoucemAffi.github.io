// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages user site: https://houcemaffi.github.io
// When you add a custom domain later, change `site` to it (and add public/CNAME).
export default defineConfig({
  site: 'https://houcemaffi.github.io',
  base: '/',
  trailingSlash: 'ignore',
  vite: { plugins: [tailwindcss()] },
});
