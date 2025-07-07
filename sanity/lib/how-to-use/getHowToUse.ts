// sanity/lib/howToUse/getHowToUseCardsByProduct.ts

import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live"; // adjust the path if needed

export const getHowToUseCardsByProduct = async (productId: string) => {
  const HOW_TO_USE_QUERY = defineQuery(`
    *[_type == "howToUseCard" && product._ref == $productId] | order(_createdAt asc) {
      _id,
      title,
      description
    }
  `);

  try {
    const result = await sanityFetch({
      query: HOW_TO_USE_QUERY,
      params: { productId },
    });

    return result.data || [];
  } catch (error) {
    console.error("Error fetching How To Use cards by product ID:", error);
    return [];
  }
};
