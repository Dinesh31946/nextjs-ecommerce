// utils/productApi.ts (or wherever you have the fetch logic)

import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

// Define the Product type
interface Product {
    _id: string;
    name: string;
    image: {
        asset: {
            url: string;
        };
    };
    mrp: number;
    mop: number;
}

export const getFeaturedProducts = async (): Promise<
    { id: string; name: string; image: string; mrp: number; mop: number }[]
> => {
    const ALL_PRODUCTS_QUERY = defineQuery(`
        *[_type == "product"] | order(name asc) {
            _id,
            name,
            "image": images[0].asset->url,
            mrp,
            mop
        }
    `);

    try {
        const products = await sanityFetch({
            query: ALL_PRODUCTS_QUERY,
        });

        // Map data to the correct shape required by FeaturedProductCarousel
        return products.data.map((product: Product) => ({
            id: product._id, // Mapping _id to id
            name: product.name,
            image: product.image || "/placeholder.svg", // Fallback for missing image
            mrp: product.mrp || 0,
            mop: product.mop || 0,
        }));
    } catch (error) {
        console.error("Error fetching all products:", error);
        return [];
    }
};
