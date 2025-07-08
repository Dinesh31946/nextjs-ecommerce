// /sanity/schemas/howToUse.ts
import { defineField, defineType } from "sanity";

export const howToUse = defineType({
  name: "howToUse",
  title: "How To Use",
  type: "document",
  fields: [
    defineField({
      name: "product",
      title: "Product Reference",
      type: "reference",
      to: [{ type: "product" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "How to use?",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
