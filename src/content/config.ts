import { z, defineCollection } from 'astro:content'

const metadataSchema = {
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
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
