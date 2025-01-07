import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductByCategory = async (categorySlug: string) => {
    const PRODUCT_BY_CATEGORY_QUERY = defineQuery(`
            *[
                _type == "product"
                && references(*[_type == "category" && slug.current == $categorySlug]._id)
            ] | order(name asc)
        `);

    try {
        const products = await sanityFetch({
            query: PRODUCT_BY_CATEGORY_QUERY,
            params: {
                categorySlug,
            },
        });

        // Return the list of products or an empty list if no products found in the given category
        return products.data || [];
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
};
