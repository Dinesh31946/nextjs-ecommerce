import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    id: string;
    image: string;
    name: string;
    mrp: number;
    mop: number;
}

export function ProductCard({ image, name, mrp, mop }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-64 w-full group">
                {" "}
                {/* Fixed height for image container */}
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-[#86d7ff] hover:bg-[#5ac8ff] text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                        Quick View
                    </Button>
                </div>
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {name.length > 20 ? name.slice(0, 20) + "..." : name}
                </h3>
                <div className="flex flex-col mb-4">
                    <span className="text-sm font-medium text-gray-500 mb-1">
                        MRP: <span className="line-through">₹{mrp}</span>
                    </span>
                    <span className="text-lg font-bold text-[#86d7ff]">
                        MOP: ₹{mop}
                    </span>
                </div>
                <Button className="w-full bg-[#86d7ff] hover:bg-[#5ac8ff] text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                    Add to Basket
                </Button>
            </div>
        </div>
    );
}
