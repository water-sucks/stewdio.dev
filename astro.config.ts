import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://stewdio.dev',
  trailingSlash: 'never',
  integrations: [icon()],
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

