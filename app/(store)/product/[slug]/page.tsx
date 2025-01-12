// app/products/[slug]/page.tsx
import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import AddToBasketButton from "@/components/AddToBasketButton";
import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { imageUrl } from "@/lib/imageUrl";
import { notFound } from "next/navigation";
import { Product } from "@/sanity.types";

interface ProductPageProps {
    params: { slug: string };
}

// Server Component that fetches the product data using Sanity
const ProductPage = async ({ params }: ProductPageProps) => {
    const { slug } = params;

    // Fetch the product data on the server side
    const product: Product | null = await getProductBySlug(slug);

    if (!product) {
        return notFound(); // Handle 404
    }

    // Determine if the product is out of stock
    const isOutOfStock = product.stock != null && product.stock <= 0;

    // const image = images?.[0]?.asset?._ref;
    const image = product.images?.[0]?.asset?._ref;
    const imageUrlSrc = image
        ? imageUrl(image).url()
        : "/path/to/fallback/image.jpg";

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div
                    className={`relative aspect-square overflow-hidden rounded-lg shadow-lg ${
                        isOutOfStock ? "opacity-50" : ""
                    }`}
                >
                    {product.images && (
                        <Image
                            src={imageUrlSrc}
                            alt={product.name || "Product Image"}
                            fill
                            className="object-contain transition-transform duration-300 hover:scale-105"
                        />
                    )}
                    {isOutOfStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <span className="text-white font-bold text-lg">
                                Out Of Stock
                            </span>
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <div className="text-xl font-semibold mb-4">
                        Rs {product.mop?.toFixed(2)}
                    </div>
                    <div className="prose max-w-none mb-6">
                        {Array.isArray(product.description) && (
                            <PortableText value={product.description} />
                        )}
                    </div>
                    <AddToBasketButton
                        product={product}
                        disabled={isOutOfStock}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
