"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product } from "@/sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import { useEffect, useState } from "react";
import useBasketStore from "@/app/(store)/store";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductCardProps {
    product: Product;
    disabled?: boolean;
}

export function ProductCard({ product }: ProductCardProps) {
    const { name, mrp, mop, images, slug } = product;

    const { addItem, removeItem, getItemCount } = useBasketStore();
    const ItemCount = getItemCount(product._id);

    const router = useRouter();

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    // Access the first image if available
    // const image = images?.[0]?.asset?._ref;
    const image = images?.[0]?.asset?._ref;
    const imageUrlSrc = image
        ? imageUrl(image).url()
        : "/path/to/fallback/image.jpg";

    const handleQuickViewClick = () => {
        router.push(`/product/${slug?.current}/`);
    };

    const handleBasketToggle = () => {
        if (ItemCount > 0) {
            removeItem(product._id);
            toast.info(`${name} removed from the basket!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                style: { backgroundColor: "#ff4d4d" }, // Red for removal
            });
        } else {
            addItem(product);
            toast.success(`${name} added to the basket!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored",
                style: { backgroundColor: "#86d7ff" }, // Blue for success
            });
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-64 w-full group">
                {" "}
                {/* Fixed height for image container */}
                <Image
                    src={imageUrlSrc}
                    alt={name || "Image"}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                        className="bg-[#86d7ff] hover:bg-[#5ac8ff] text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                        onClick={handleQuickViewClick}
                    >
                        Quick View
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {name?.length && name.length > 20
                        ? name.slice(0, 20) + "..."
                        : name}
                </h3>
                <div className="flex flex-col mb-4">
                    <span className="text-sm font-medium text-gray-500 mb-1">
                        MRP: <span className="line-through">₹{mrp}</span>
                    </span>
                    <span className="text-lg font-bold text-[#86d7ff]">
                        MOP: ₹{mop}
                    </span>
                </div>
                <Button
                    className={`w-full text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ${
                        ItemCount > 0
                            ? "bg-red-500 hover:bg-red-600"
                            : "bg-[#86d7ff] hover:bg-[#5ac8ff]"
                    }`}
                    onClick={handleBasketToggle}
                >
                    {ItemCount > 0 ? "Remove from Basket" : "Add to Basket"}
                </Button>
            </div>
        </div>
    );
}
