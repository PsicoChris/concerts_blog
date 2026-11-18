import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://psicochris.github.io',
  base: process.env.NODE_ENV === 'production' ? '/concerts_blog' : '/',
});
