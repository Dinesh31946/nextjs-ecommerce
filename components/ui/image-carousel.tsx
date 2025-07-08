"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
    images: string[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full">
            <div className="relative h-[400px] md:h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                    src={images[currentIndex]}
                    alt={`Product image ${currentIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-500 ease-in-out"
                />
            </div>
            <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 left-4 rounded-full bg-white/80 text-gray-800 hover:bg-white"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full bg-white/80 text-gray-800 hover:bg-white"
                onClick={nextSlide}
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "w-3 h-3 rounded-full transition-all duration-300 ease-in-out",
                            currentIndex === index
                                ? "bg-[#86d7ff] scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                        )}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "relative w-20 h-20 rounded-md overflow-hidden transition-all duration-300 ease-in-out",
                            currentIndex === index
                                ? "ring-2 ring-[#86d7ff] ring-offset-2"
                                : "opacity-70 hover:opacity-100"
                        )}
                    >
                        <Image
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
