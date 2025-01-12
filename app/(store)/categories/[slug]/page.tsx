import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCetgories";

interface ProductPageProps {
    params: { slug: string };
}

async function ProductPage({ params }: ProductPageProps) {
    const { slug } = params;

    // Fetch required data
    const categories = await getAllCategories();

    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    {slug
                        .split("-")
                        .map(
                            (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}{" "}
                    Collection
                </h1>
                <ProductsView categories={categories} />
            </div>
        </div>
    );
}

export default ProductPage;
