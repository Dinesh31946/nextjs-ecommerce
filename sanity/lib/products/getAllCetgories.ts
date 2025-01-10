import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

// Function to get all the categories
export const getAllCategories = async () => {
    const ALL_CATEGORIES_QUERY = defineQuery(`
        *[_type == "category"] | order(title asc) {
            _id,
            title,
            description,
            slug {
                current
            },
            smallImage {
                asset-> {
                    url
                }
            },
            bannerImage {
                asset-> {
                    url
                }
            }
        }
    `);

    try {
        // Use sanityFetch to send the query
        const categories = await sanityFetch({
            query: ALL_CATEGORIES_QUERY,
        });

        // Return the list of categories or an empty list if no categories
        return categories.data || [];
    } catch (error) {
        console.error("Error fetching all categories:", error);
        return [];
    }
};
