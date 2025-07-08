import { defineField, defineType } from 'sanity';

export const videoCardType = defineType({
  name: 'videoCard',
  title: 'Video Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: { accept: 'video/mp4' },
    }),
    defineField({
      name: 'product',
      title: 'Product Reference',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});