import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default {
  site: 'https://pinkstudio.com.br',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    icon({
      iconDir: 'src/icons',
    }),
  ],
};