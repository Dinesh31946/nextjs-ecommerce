import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getActiveOfferText = async () => {
    const ACTIVE_OFFER_TEXT = defineQuery(`
            *[_type == "offertext" && isActive == true ] [0]
        `);

    try {
        const activeOfferText = await sanityFetch({
            query: ACTIVE_OFFER_TEXT, //Pass the coupon as a query parameter
        });

        return activeOfferText ? activeOfferText.data : null;
    } catch (error) {
        console.error("Error fetching active sale by coupon code:", error);
        return null;
    }
};
