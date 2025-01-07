import CarouselBanner from "@/components/CarouselBanner";
import OfferBanner from "@/components/OfferBanner";
import ProductsView from "@/components/ProductsView";
import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCetgories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {
    const products = await getAllProducts();
    const categories = await getAllCategories();

    return (
        <div>
            <OfferBanner />
            {/* <CarouselBanner /> */}

            {/* render all the products */}
            <div>
                <ProductsView products={products} categories={categories} />
            </div>
        </div>
    );
}
