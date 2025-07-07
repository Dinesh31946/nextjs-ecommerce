// schemas/videoCard.ts
import { PlayIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const videoCardType = defineType({
  name: "videoCard",
  title: "Video Card",
  type: "document",
  icon: PlayIcon as React.ComponentType,
  fields: [
    defineField({
      name: "video",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/mp4,video/webm",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "product",
      title: "Related Product",
      type: "reference",
      to: [{ type: "product" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: "video",
      subtitle: "description",
    },
    prepare({ media, subtitle }) {
      return {
        title: "Video Card",
        subtitle,
        media,
      };
    },
  },
});
