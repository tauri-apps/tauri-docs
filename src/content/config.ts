import { z, defineCollection } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    date: z.date(),
    title: z.string(),
    summary: z.string().optional(),
    imageSrc: z.string().optional(),
    imageDarkSrc: z.string().optional(),
    authors: z.array(z.string()).optional(),
  }),
})

const api = defineCollection({})
const docs = defineCollection({
  schema: z.object({
    // TODO: Remove the optional from all of these
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    meta_position: z.number().optional(),
  }),
})

export const collections = {
  api,
  blog,
  docs,
}
