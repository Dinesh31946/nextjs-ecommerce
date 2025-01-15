import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/sanity.types";
import Image from "next/image";
// import { imageUrl } from "@/lib/imageUrl";

interface ProductCardProps {
    product: Product;
    disabled?: boolean;
}

export function SampleProductCard({ product }: ProductCardProps) {
    const { name, mrp, mop, images } = product;

    const image = images?.[0]?.asset?._ref;
    // const imageUrlSrc = image
    //     ? imageUrl(image).url()
    //     : "/path/to/fallback/image.jpg";

    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardContent className="p-0">
                <Image
                    src={image || "images"}
                    alt={name || "unknown"}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">{name}</h3>
                        <div className="flex flex-col mb-4">
                            <span className="text-sm font-medium text-gray-500 mb-1">
                                MRP:{" "}
                                <span className="line-through">₹{mrp}</span>
                            </span>
                            <span className="text-lg font-bold text-[#86d7ff]">
                                MOP: ₹{mop}
                            </span>
                        </div>
                    </div>
                    <Button className="w-full bg-[#86d7ff] text-white hover:bg-[#5eb8e0]">
                        Add to Cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
