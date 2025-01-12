import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

// Use the full Product type from sanity.types.ts
import { Product } from "@/sanity.types";

// Define the Product type returned from the API
export const getFeaturedProducts = async (): Promise<Product[]> => {
    const ALL_FEATURE_PRODUCTS_QUERY = defineQuery(`
        *[_type == "product" && isFeatured == true] | order(name asc) {
            _id,
            _type,
            _createdAt,
            _updatedAt,
            _rev,
            name,
            images,
            slug,
            mrp,
            mop
        }
    `);

    try {
        const products = await sanityFetch({
            query: ALL_FEATURE_PRODUCTS_QUERY,
        });

        // Map the data to match the full Product type
        return products.data.map((product: any) => ({
            ...product, // Include all fetched properties
        }));
    } catch (error) {
        console.error("Error fetching featured products:", error);
        return [];
    }
};
