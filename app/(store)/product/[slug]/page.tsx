import { ProductDetails } from "@/components/ProductDetails";
import { getFAQsByProductSlug } from "@/sanity/lib/faq/getFAQsByProduct";
import { getHowToUseByProductSlug } from "@/sanity/lib/howToUse/getHowToUseByProduct";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { getVideoCardsByProductSlug } from "@/sanity/lib/videoCard/getVideoCardByProduct";

// Define the correct type for your page props
interface ProductPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params; // Ensure `params` resolves correctly
    // console.log("Slug:", slug); // Debug: Log the slug value

    if (!slug) {
        return <p>Invalid product slug</p>; // Handle missing slug
    }

    const productData = await getProductBySlug(slug);
    const videoCards = await getVideoCardsByProductSlug(slug);
    const howToUse = await getHowToUseByProductSlug(slug);
    const faqs = await getFAQsByProductSlug(slug);

    if (!productData) {
        return <p>Product not found</p>; // Handle 404
    }

    return (
        <ProductDetails
            {...productData}
            product={productData}
            features={productData.keyFeatures}
            videoCards={videoCards}
            howToUse={howToUse}
            faqs={faqs}
        />
    );
}
