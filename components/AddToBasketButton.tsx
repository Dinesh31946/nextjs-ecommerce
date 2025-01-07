"use client";

import useBasketStore from "@/app/(store)/store";
import { Product } from "@/sanity.types";
import { useEffect, useState } from "react";

interface AddToBasketButtonProps {
    product: Product;
    disabled?: boolean;
}

function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
    const { addItem, removeItem, getItemCount } = useBasketStore();
    const ItemCount = getItemCount(product._id);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <div className="flex items-start justify-start space-x-2">
            <button
                onClick={() => removeItem(product._id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${ItemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"} `}
                disabled={ItemCount === 0 || disabled}
            >
                <span
                    className={`text-xl font-bold ${ItemCount === 0 ? "text-gray-400" : "text-gray-600"} `}
                >
                    {" "}
                    -{" "}
                </span>
            </button>
            <span className="w-8 text-center font-semibold"> {ItemCount}</span>
            <button
                onClick={() => addItem(product)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-6000"} `}
                disabled={disabled}
            >
                <span className="text-xl font-bold text-white"> + </span>
            </button>
        </div>
    );
}

export default AddToBasketButton;
