"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCard } from "./ProductCard";

// Define the correct type for the products prop
interface FeaturedProductCarouselProps {
    products: {
        id: string;
        name: string;
        image: string;
        mrp: number;
        mop: number;
    }[];
}

export function FeaturedProductCarousel({
    products,
}: FeaturedProductCarouselProps) {
    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 768) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(3);
            } else {
                setSlidesPerView(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-[#e6f7ff] to-[#ffffff] rounded-xl shadow-lg">
            <h2 className="text-4xl font-extrabold text-[#86d7ff] mb-8 text-center">
                Featured Products
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={35}
                slidesPerView={slidesPerView}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="featured-carousel"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
