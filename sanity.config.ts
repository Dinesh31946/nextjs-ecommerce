'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk' // ✅ Correct plugin for content editing UI
import { visionTool } from '@sanity/vision'

import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure' // ✅ Your custom desk structure
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  basePath: '/studio', // Sanity Studio will be served at /studio
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({ structure }), // ✅ Use correct desk tool with structure override
    visionTool({ defaultApiVersion: apiVersion }), // GROQ query testing tool
  ],
})
