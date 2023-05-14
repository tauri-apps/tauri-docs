import { z, defineCollection } from 'astro:content'

const metadataSchema = {
  title: z.string().optional(),
  description: z.string().optional(),
  position: z.number().optional(),
  i18n_ready: z.boolean().optional(),
}

const docs = defineCollection({
  schema: z.object({
    ...metadataSchema,
  }),
})

const apiCli = defineCollection({})
const apiConfig = defineCollection({})
const apiJs = defineCollection({})

export const collections = {
  'api-cli': apiCli,
  'api-config': apiConfig,
  'api-js': apiJs,
  docs: docs,
}

export type CollectionKey = keyof typeof collections
