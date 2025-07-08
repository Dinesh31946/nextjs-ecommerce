import { defineField, defineType } from 'sanity';

export const paymentInfo = defineType({
  name: 'paymentInfo',
  title: 'Manual Payment Info',
  type: 'document',
  fields: [
    defineField({
      name: 'qrCode',
      title: 'QR Code Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'upiId',
      title: 'UPI ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bank',
      title: 'Bank Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'account',
      title: 'Account Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ifscCode',
      title: 'IFSC Code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
