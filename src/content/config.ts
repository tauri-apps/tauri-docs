import { z, defineCollection } from 'astro:content'

const metadataSchema = {
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  meta_position: z.number().optional(),
  i18n_ready: z.boolean().optional(),
}

const blog = defineCollection({
  schema: z.object({
    ...metadataSchema,
    date: z.date(),
    imageSrc: z.string().optional(),
    imageDarkSrc: z.string().optional(),
    authors: z.array(z.string()),
  }),
})

const docs = defineCollection({
  schema: z.object({
    ...metadataSchema,
  }),
})

export const collections = {
  blog,
  docs,
}
