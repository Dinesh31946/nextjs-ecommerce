import ProductGrid from "@/components/ProductGrid";
import { searchProductsByName } from "@/sanity/lib/products/searchProductsByName";

// Define the types for searchParams (for type safety)
interface SearchPageProps {
    searchParams: {
        query: string;
    };
}

async function SearchPage({ searchParams }: SearchPageProps) {
    // No need to await, searchParams is already available synchronously
    const { query } = searchParams;

    // Fetch products based on the query
    const products = await searchProductsByName(query);

    // If no products found, show the 'no products found' message
    if (!products.length) {
        return (
            <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        No products found for: {query}
                    </h1>
                    <p className="text-gray-600 text-center">
                        Try searching with different keywords
                    </p>
                </div>
            </div>
        );
    }

    // Render the search results
    return (
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Search results for {query}
                </h1>
                <ProductGrid products={products} />
            </div>
        </div>
    );
}

export default SearchPage;
