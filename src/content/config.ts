import { z, defineCollection } from 'astro:content'

const metadataSchema = {
  title: z.string().optional(),
  description: z.string().optional(),
  position: z.number().optional(),
  i18n_ready: z.boolean().optional(),
}

const docsV1 = defineCollection({
  schema: z.object({
    ...metadataSchema,
  }),
})

const api = defineCollection({})

export const collections = {
  api,
  "docs-v1": docsV1,
}

export type CollectionKey = keyof typeof collections
