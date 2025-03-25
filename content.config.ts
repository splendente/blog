import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        emoji: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        tags: z.array(z.string()),
      }),
    }),
  },
})
