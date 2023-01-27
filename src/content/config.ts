import { z, defineCollection } from 'astro:content'

const api = defineCollection({})

const blog = defineCollection({
  schema: z.object({
    date: z.date(),
    title: z.string(),
    summary: z.string().optional(),
    imageSrc: z.string().optional(),
    imageDarkSrc: z.string().optional(),
    author: z.union([z.array(z.string()), z.string()]).optional(),
  }),
})

const docs = defineCollection({})

export const collections = {
  blog,
  docs,
  api,
}
