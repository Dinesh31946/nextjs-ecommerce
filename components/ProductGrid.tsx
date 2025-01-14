"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/sanity.types";
import { Pagination } from "./Pagination";

interface ProductGridProps {
    products: Product[];
}

const PRODUCTS_PER_PAGE = 9;

export function ProductGrid({ products }: ProductGridProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = products.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-6 mx-auto">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <div className="w-full max-w-md mx-auto">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}
