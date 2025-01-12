import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import useBasketStore from "@/app/(store)/store"; // Your custom basket store
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "@/sanity.types";

// Define the type for the minimal product object being passed
interface ProductMinimal {
    _id: string;
    name: string;
}

interface AddToCartButtonProps {
    product: ProductMinimal;
    disabled?: boolean;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
    const { addItem, removeItem, getItemCount } = useBasketStore();
    const [isAdded, setIsAdded] = useState(false); // Local state to track the button's added status

    useEffect(() => {
        // Sync the button state with the basket state
        const itemCount = getItemCount(product._id); // Use the product._id here
        setIsAdded(itemCount > 0); // Update the button state based on item count in the basket
    }, [getItemCount, product._id]); // Depend only on stable values: getItemCount and product._id

    const handleClick = () => {
        const itemCount = getItemCount(product._id);

        // Convert ProductMinimal to Product
        const fullProduct: Product = {
            _id: product._id,
            _type: "product",
            _createdAt: new Date().toISOString(),
            _updatedAt: new Date().toISOString(),
            _rev: "",
            name: product.name,
            slug: undefined,
            images: [],
            description: [],
            mrp: undefined,
            mop: undefined,
            keyFeatures: [],
            categories: [],
            isFeatured: false,
            isNewArrival: false,
            banner: [],
            stock: undefined,
        };

        if (itemCount > 0) {
            removeItem(fullProduct._id); // Remove item if already in the cart
            toast.info(`${product.name} removed from the basket!`, {
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
            addItem(fullProduct); // Add item if not in the cart
            toast.success(`${product.name} added to the basket!`, {
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

        // Update the local `isAdded` state to trigger UI re-render
        setIsAdded(!isAdded);
    };

    return (
        <Button
            onClick={handleClick}
            className={`
                relative overflow-hidden transition-all duration-300 ease-in-out
                ${isAdded ? "bg-green-500 hover:bg-green-600" : "bg-[#86d7ff] hover:bg-[#5ec9ff]"}
                text-white font-semibold py-2 px-6 rounded-full
                transform hover:scale-105 active:scale-95
            `}
        >
            <span
                className={`flex items-center transition-all duration-300 ${isAdded ? "opacity-0" : "opacity-100"}`}
            >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
            </span>
            <span
                className={`
                    absolute inset-0 flex items-center justify-center
                    transition-all duration-300
                    ${isAdded ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"}
                `}
            >
                <Check className="w-5 h-5 mr-2" />
                Added!
            </span>
        </Button>
    );
}
