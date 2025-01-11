import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: "product",
    title: "Product",
    type: "document",
    icon: TrolleyIcon as React.ComponentType, // Explicit type casting
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "images",
            title: "Product Images",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "blockContent",
        }),
        defineField({
            name: "mrp",
            title: "MRP (Maximum Retail Price)",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "mop",
            title: "MOP (Minimum Operating Price)",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "keyFeatures",
            title: "Key Features",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "category" } }],
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "images.0", // Show the first image in the array as the preview image
            mop: "mop",
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: `Rs ${select.mop}`,
                media: select.media,
            };
        },
    },
});
