// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://en2u.vercel.app',
  // Inline the CSS: the whole stylesheet is a few KB, so this removes a
  // render-blocking round trip and helps LCP on mobile.
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
