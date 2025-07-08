    import { defineField, defineType } from "sanity";

    export const orderType = defineType({
        name: "order",
        title: "Order",
        type: "document",
        fields: [
            defineField({
                name: "orderNumber",
                title: "Order Number",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "transactionId",
                title: "Transaction ID",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "customerName",
                title: "Customer Name",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "email",
                title: "Email",
                type: "string",
                validation: (Rule) => Rule.required().email(),
            }),
            defineField({
                name: "phone",
                title: "Phone Number",
                type: "string",
                validation: (Rule) =>
                    Rule.required().regex(/^\d{10}$/, {
                        name: "Phone number",
                        invert: false,
                    }),
            }),
            defineField({
                name: "address",
                title: "Address",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "city",
                title: "City",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "state",
                title: "State",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "pincode",
                title: "Pincode",
                type: "string",
                validation: (Rule) =>
                    Rule.required().regex(/^\d{6}$/, {
                        name: "Pincode",
                        invert: false,
                    }),
            }),
            defineField({
                name: "products",
                title: "Products",
                type: "array",
                of: [
                    {
                        type: "object",
                        fields: [
                            defineField({
                                name: "productId",
                                title: "Product ID",
                                type: "reference",
                                to: [{ type: "product" }],
                                validation: (Rule) => Rule.required(),
                            }),
                            defineField({
                                name: "quantity",
                                title: "Quantity",
                                type: "number",
                                validation: (Rule) => Rule.required().min(1),
                            }),
                            defineField({
                                name: "price",
                                title: "Price",
                                type: "number",
                                validation: (Rule) => Rule.required().min(0),
                            }),
                        ],
                    },
                ],
                validation: (Rule) => Rule.required().min(1),
            }),
            defineField({
                name: "totalPrice",
                title: "Total Price",
                type: "number",
                validation: (Rule) => Rule.required().min(0),
            }),
            defineField({
                name: "currency",
                title: "Currency",
                type: "string",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "status",
                title: "Order Status",
                type: "string",
                options: {
                    list: [
                        { title: "Pending", value: "pending" },
                        { title: "Paid", value: "paid" },
                        { title: "Shipped", value: "shipped" },
                        { title: "Delivered", value: "delivered" },
                        { title: "Cancelled", value: "cancelled" },
                    ],
                },
                initialValue: "pending",
                validation: (Rule) => Rule.required(),
            }),
            defineField({
                name: "orderDate",
                title: "Order Date",
                type: "datetime",
                validation: (Rule) => Rule.required(),
            }),
        ],
        preview: {
            select: {
                title: "orderNumber",
                subtitle: "customerName",
                media: "products.0.image",
            },
        },
    });
