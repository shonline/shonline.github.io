import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  site: 'https://xn--b1aladlsj0e7b.xn--p1ai',
});
