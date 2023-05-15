import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
const config = defineConfig({
  integrations: [react()],
  site: 'https://marcos006-dev.github.io',
  base: '/sada',
});

export default config;
