import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stewdio.dev',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  image: {
    experimentalLayout: 'responsive',
  },
  experimental: {
    responsiveImages: true,
  },
});
