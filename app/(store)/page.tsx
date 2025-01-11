import CarouselBanner from "@/components/CarouselBanner";
import { FeaturedProductCarousel } from "@/components/FeaturedProductCarousel";
// import OfferBanner from "@/components/OfferBanner";
import ProductsView from "@/components/ProductsView";
// import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCetgories";
// import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import NewArrivalSection from "@/components/NewArrival";
import WavePromo from "@/components/WavePromo";
import { getFeaturedProducts } from "@/sanity/lib/products/getAllFeatureProduct";

export default async function Home() {
    // const products = await getAllProducts();
    const categories = await getAllCategories();
    // const featuredProducts = await getFeaturedProducts();
    const featuredProducts = await getFeaturedProducts();

    return (
        <div>
            {/* <OfferBanner /> */}
            <CarouselBanner />
            <FeaturedProductCarousel products={featuredProducts} />

            {/* render all the products */}
            <div>
                <ProductsView categories={categories} />
            </div>

            <div>
                <WavePromo />
            </div>

            <div>
                <NewArrivalSection />
            </div>
        </div>
    );
}
