// my-website/sanityClient.js

import {createClient} from '@sanity/client'

export const client = createClient({
  // Find your project ID in your sanity.json file
  projectId: 'x2dxeg98',
  dataset: 'production',
  useCdn: true, // set to `false` for fresh data
  apiVersion: '2025-06-08', // use a current date
})