import { GiftIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const offerType = defineType({
    name: "offertext",
    title: "OfferText",
    type: "document",
    icon: GiftIcon,
    fields: [
        defineField({
            name: "offertext",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "offertext",
            },
        }),
        defineField({
            name: "isActive",
            title: "Is Active?",
            type: "boolean",
            description: "Toggle to Activate/Deactivate sale",
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: "offertext",
            isActive: "isActive",
        },
    },
});
