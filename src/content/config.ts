// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(), // Заголовок обязателен
        description: z.string(), // Описание для SEO обязательно
        pubDate: z.date(), // Дата публикации
        author: z.string().default('Admin'), // Автор (по умолчанию Admin)
        image: z.string().optional(), // Картинка (необязательно)
        tags: z.array(z.string()), // Теги (список)
    }),
});

export const collections = {
    'blog': blogCollection,
};
