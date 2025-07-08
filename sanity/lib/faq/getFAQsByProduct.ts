import { client } from "../client";

export const getFAQsByProductSlug = async (slug: string) => {
  const query = `
    *[_type == "faq" && references(*[_type == "product" && slug.current == $slug]._id)] {
      _id,
      question,
      answer
    }
  `;
  return await client.fetch(query, { slug });
};
