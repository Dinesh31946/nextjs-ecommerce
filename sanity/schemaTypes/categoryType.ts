import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
    name: "category",
    title: "Category",
    type: "document",
    icon: TagIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "smallImage",
            title: "Small Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description: "Image to display in the category list section.",
        }),
        defineField({
            name: "bannerImage",
            title: "Banner Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description: "Banner image to display on the category page.",
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "description",
            media: "smallImage",
        },
    },
});
