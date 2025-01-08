"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/images/Home-Banner-1.jpeg",
    "/images/Home-Banner-2.jpeg",
    "/images/Home-Banner-3.jpeg",
];

export default function CarouselBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden "
            style={{ aspectRatio: "1250 / 417" }}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        sizes="100vw"
                        priority={index === 0}
                        style={{
                            objectFit: "cover",
                        }}
                        className="px-4"
                    />
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            index === currentSlide ? "bg-white" : "bg-gray-400"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
