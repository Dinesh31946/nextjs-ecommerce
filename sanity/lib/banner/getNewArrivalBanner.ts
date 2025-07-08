import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getNewArrivalProducts = async () => {
    const NEW_ARRIVALS_QUERY = defineQuery(`
        *[_type == "product" && isNewArrival == true] | order(_createdAt desc) {
            _id,
            name,
            slug {
                current
            },
            banner[] {
                asset-> {
                    url
                }
            }
        }
    `);

    try {
        const products = await sanityFetch({ query: NEW_ARRIVALS_QUERY });

        // Processing products to handle null values
        const processedProducts = products.data.map((product) => ({
            _id: product._id,
            name: product.name || "Untitled Product", // Fallback name
            slug: {
                current: product.slug?.current || "", // Fallback slug if null
            },
            banner:
                product.banner?.map((b) => ({
                    asset: {
                        url: b.asset?.url || "/placeholder.jpg", // Fallback URL if null
                    },
                })) || [],
        }));

        return processedProducts || [];
    } catch (error) {
        console.error("Error fetching new arrival products:", error);
        return [];
    }
};
