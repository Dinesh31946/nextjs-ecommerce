import { ProductGrid } from "@/components/ProductGrid";
import { getProductByCategory } from "@/sanity/lib/products/getProductByCategory";

// This is the type for the props that CategoryPage will receive
type CategoryPageProps = {
    params: Promise<{ slug: string }>;
};

// The CategoryPage component
const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;

    if (!slug) {
        return <p>Invalid product slug</p>; // Handle missing slug
    }

    const product = await getProductByCategory(slug);

    if (!product) {
        return <p>Product not found</p>; // Handle 404
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-[#86d7ff] text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold">Our Products</h1>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <ProductGrid products={product} />
            </main>
        </div>
    );
};

export default CategoryPage;
