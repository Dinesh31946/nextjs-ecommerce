// /sanity/lib/products/getHowToUseByProductSlug.ts
import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getHowToUseByProductSlug = async (slug: string) => {
  const HOW_TO_USE_QUERY = defineQuery(`
    *[_type == "howToUse" && references(*[_type == "product" && slug.current == $slug]._id)][0]{
      _id,
      title,
      description
    }
  `);

  try {
    const howToUse = await sanityFetch({
      query: HOW_TO_USE_QUERY,
      params: { slug },
    });

    return howToUse?.data || null;
  } catch (error) {
    console.error("Error fetching howToUse:", error);
    return null;
  }
};
