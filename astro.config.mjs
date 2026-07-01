import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://yaleksandr89.github.io',
  integrations: [icon()],
  output: 'static',
});
