import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    // Замените на точное название вашего репозитория!
    // Если репозиторий называется 'ubtvpn1', то пишем '/ubtvpn1'
    // Если репозиторий называется 'ubtvpn-eng.github.io', то base не нужен (или '/')
    base: '/',

    // Ваша ссылка на GitHub Pages
    site: 'https://ubtvpn-eng.github.io/ubtvpn1',

    integrations: [tailwind()],
});
