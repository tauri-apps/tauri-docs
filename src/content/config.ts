import { z, defineCollection } from 'astro:content'

const metadataSchema = {
  title: z.string().optional(),
  description: z.string().optional(),
  meta_position: z.number().optional(),
  i18n_ready: z.boolean().optional(),
}

const docs = defineCollection({
  schema: z.object({
    ...metadataSchema,
  }),
})

const api = defineCollection({})

export const collections = {
  api,
  docs,
}
