import { defineField, defineType } from "sanity";

export const paymentInfo = defineType({
  name: "paymentInfo",
  title: "Payment Info",
  type: "document",
  fields: [
    defineField({
      name: "qrImage",
      title: "QR Code Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "accountHolderName",
      title: "Account Holder Name",
      type: "string",
    }),
    defineField({
      name: "upiId",
      title: "UPI ID",
      type: "string",
    }),
    defineField({
      name: "bankAccountNumber",
      title: "Bank Account Number",
      type: "string",
    }),
    defineField({
      name: "ifscCode",
      title: "IFSC Code",
      type: "string",
    }),
  ],
});
