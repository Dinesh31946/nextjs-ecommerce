// sanity/lib/products/getProductBySlug.ts
import { sanityFetch } from "../live"; // Sanity fetch method

export const getProductBySlug = async (slug: string) => {
    const PRODUCT_BY_ID_QUERY = `
    *[ _type == "product" && slug.current == $slug ][0] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      name,
      slug,
      images,
      description,
      mrp,
      mop,
      keyFeatures,
      categories,
      stock
    }
  `;

    try {
        const result = await sanityFetch({
            query: PRODUCT_BY_ID_QUERY,
            params: { slug },
        });

        return result.data || null;
    } catch (error) {
        console.error("Error fetching product by slug:", error);
        return null;
    }
};
