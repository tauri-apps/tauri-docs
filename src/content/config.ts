import { z, defineCollection } from 'astro:content'

const metadataSchema = {
  title: z.string().optional(),
  description: z.string().optional(),
  position: z.number().optional(),
  i18n_ready: z.boolean().optional(),
}

const docs1 = defineCollection({
  schema: z.object({
    ...metadataSchema,
  }),
})

const apiCli1 = defineCollection({})
const apiConfig1 = defineCollection({})
const apiJs1 = defineCollection({})

export const collections = {
  "api-cli-1": apiCli1,
  "api-config-1": apiConfig1,
  "api-js-1": apiJs1,
  "docs-1": docs1,
}

export type CollectionKey = keyof typeof collections
