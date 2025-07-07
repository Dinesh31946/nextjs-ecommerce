// sanity/lib/queries/getVideoCardsByProduct.ts

import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getVideoCardsByProduct = async (productId: string) => {
  const VIDEO_CARDS_BY_PRODUCT_QUERY = defineQuery(`
    *[_type == "videoCard" && product._ref == $productId] {
      _id,
      description,
      "videoUrl": video.asset->url
    }
  `);

  try {
    const result = await sanityFetch({
      query: VIDEO_CARDS_BY_PRODUCT_QUERY,
      params: { productId },
    });

    return result.data || [];
  } catch (error) {
    console.error("Error fetching video cards by product ID:", error);
    return [];
  }
};
