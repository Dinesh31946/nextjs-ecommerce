import { GetServerSideProps } from "next";
// import ProductGrid from "./ProductGrid";
import { CategorySelector } from "./CategorySelector";
import { getAllCategories } from "@/sanity/lib/products/getAllCetgories"; // Importing the fetch function
// import { Category, Product } from "@/sanity.types";
import { Category } from "@/sanity.types";

interface ProductsViewProps {
    // products: Product[];
    categories: Category[]; // Categories will be passed as props
}

// const ProductsView = ({ products, categories }: ProductsViewProps) => {
const ProductsView = ({ categories }: ProductsViewProps) => {
    return (
        <div className="flex flex-col">
            {/* Categories */}
            <div className="">
                {/* Passing categories as a prop to CategorySelector */}
                <CategorySelector categories={categories} />
            </div>
        </div>
    );
};

// Server-side fetching function to get categories
export const getServerSideProps: GetServerSideProps = async () => {
    let categories: Category[] = [];

    try {
        categories = await getAllCategories();
        // Fetching categories from Sanity
    } catch (error) {
        console.error("Error fetching categories:", error);
    }

    return {
        props: {
            categories,
        },
    };
};

export default ProductsView;
