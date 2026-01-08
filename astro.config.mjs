// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    // Замените на ваш адрес GitHub Pages, например: https://username.github.io
    site: 'https://USERNAME.github.io',
    // Замените на название вашего репозитория, например: /my-repo
    base: '/REPO_NAME',

    integrations: [tailwind()],
});
