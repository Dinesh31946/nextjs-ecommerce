import CarouselBanner from "@/components/CarouselBanner";
import { FeaturedProductCarousel } from "@/components/FeaturedProductCarousel";
// import OfferBanner from "@/components/OfferBanner";
// import { Button } from "@/components/ui/button";
import { getAllCategories } from "@/sanity/lib/products/getAllCetgories";
import { getNewArrivalProducts } from "@/sanity/lib/banner/getNewArrivalBanner";
// import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import NewArrivalSection from "@/components/NewArrival";
// import WavePromo from "@/components/WavePromo";
import { getFeaturedProducts } from "@/sanity/lib/products/getAllFeatureProduct";
import CategoryView from "@/components/CategoryView";

export default async function Home() {
    const categories = await getAllCategories();
    const featuredProducts = await getFeaturedProducts();
    const newArrivalProducts = await getNewArrivalProducts();

    return (
        <div>
            {/* <OfferBanner /> */}
            <CarouselBanner />
            <FeaturedProductCarousel products={featuredProducts} />

            {/* render all the products */}
            <div>
                <CategoryView categories={categories} />
            </div>

            {/* <div>
                <WavePromo />
            </div> */}

            <div>
                <NewArrivalSection products={newArrivalProducts} />
            </div>
        </div>
    );
}
