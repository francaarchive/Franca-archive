import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://francaarchive.com',
  integrations: [sitemap()],
});