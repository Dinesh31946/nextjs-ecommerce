import { ProductDetails } from "@/components/ProductDetails";
import { getHowToUseCardsByProduct } from "@/sanity/lib/how-to-use/getHowToUse";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { getVideoCardsByProduct } from "@/sanity/lib/videoCard/getVideoCard";

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
    const videoCards = await getVideoCardsByProduct(productData._id);
    const howToUseCard = await getHowToUseCardsByProduct(productData._id);

    if (!productData) {
        return <p>Product not found</p>; // Handle 404
    }

    return (
        <ProductDetails
            {...productData}
            product={productData}
            features={productData.keyFeatures}
            videoCards={videoCards}
            howToUseCard={howToUseCard}
        />
    );
}
