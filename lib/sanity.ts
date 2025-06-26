import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'x2dxeg98',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-06-08'
})
