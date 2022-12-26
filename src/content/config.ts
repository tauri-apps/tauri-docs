import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: {
    date: z.date(),
    title: z.string(),
    summary: z.string().optional(),
    image: z.string().optional(),
    authors: z.array(z.string()).optional(),
  },
})

export const collections = {
  blog: blog,
}
