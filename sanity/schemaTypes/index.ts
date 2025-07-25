import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { productType } from "./productType";
import { orderType } from "./orderType";
import { salesType } from "./salesType";
import { offerType } from "./offerType";
import { reachUsFormType } from "./contactType";
import { videoCardType } from "./videoCard";
import { howToUse } from "./howToUse";
import { faq } from "./faq";
import { paymentInfo } from "./paymentInfo";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        blockContentType,
        categoryType,
        productType,
        orderType,
        salesType,
        offerType,
        reachUsFormType,
        videoCardType,
        howToUse,
        faq,
        paymentInfo,
    ],
};
