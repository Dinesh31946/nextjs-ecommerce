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
        return products.data || [];
    } catch (error) {
        console.error("Error fetching new arrival products:", error);
        return [];
    }
};
