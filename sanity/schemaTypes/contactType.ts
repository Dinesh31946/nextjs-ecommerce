import { HomeIcon } from "@sanity/icons"; // Example icon
import { defineField, defineType } from "sanity";

export const reachUsFormType = defineType({
    name: "reachUsForm",
    title: "Reach Us",
    type: "document",
    icon: HomeIcon,
    fields: [
        defineField({
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "email",
            title: "Email Address",
            type: "string",
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: "phoneNumber",
            title: "Phone Number",
            type: "string", // No validation for optional field
        }),
        defineField({
            name: "summary",
            title: "Summary",
            type: "text",
            validation: (Rule) => Rule.required().min(10),
        }),
        defineField({
            name: "submittedAt",
            title: "Submitted At",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: "fullName",
            subtitle: "email",
            summary: "summary",
        },
        prepare(select) {
            return {
                title: select.title,
                subtitle: select.subtitle
                    ? `Email: ${select.subtitle}`
                    : "No email",
                description: select.summary
                    ? `${select.summary.slice(0, 50)}...`
                    : "No summary",
            };
        },
    },
});
