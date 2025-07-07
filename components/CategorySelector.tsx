"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
// import { useRouter } from "next/navigation";
import Link from "next/link";

interface Category {
    _id: string;
    _type: "category";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: {
        current?: string;
    };
    description?: string;
    smallImage?: {
        asset?: {
            _ref: string;
            _type: "reference";
            url?: string; // Allow url if it exists
        };
    };
    bannerImage?: {
        asset?: {
            _ref: string;
            _type: "reference";
            url?: string; // Allow url if it exists
        };
    };
}

interface CategorySelectorProps {
    categories: Category[];
}

export function CategorySelector({ categories }: CategorySelectorProps) {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        null
    );
    const [autoRotateIndex, setAutoRotateIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    // const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            setAutoRotateIndex(
                (prevIndex) => (prevIndex + 1) % categories.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [categories.length]);

    useEffect(() => {
        if (categories.length > 0) {
            setSelectedCategory(categories[autoRotateIndex]);
        }
    }, [autoRotateIndex, categories]);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Change to your breakpoint
        };

        handleResize(); // Check on initial load
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const descriptionText =
        selectedCategory?.description || "No description available.";
    const truncatedDescription = descriptionText.slice(0, 350);

    if (categories.length === 0) {
        return <div>No categories available.</div>;
    }

    return (
        <div className="w-full mx-auto px-3 py-10 bg-[#f8faff] rounded-lg shadow-md font-sans">
            {/* Category Menu */}
            <div className="mb-6">
                <div className="flex justify-center flex-wrap gap-4">
                    {categories.map((category) => (
                        <motion.button
                            key={category._id}
                            className={`flex flex-col items-center w-24 h-24 px-3 py-3 rounded-lg border border-gray-300 shadow-sm bg-white transition-all duration-300 ${
                                selectedCategory?._id === category._id
                                    ? "border-[#86d7ff] shadow-md bg-gradient-to-r from-[#86d7ff] to-[#5eb8e0] text-white"
                                    : "hover:border-[#86d7ff] hover:shadow-md hover:bg-gradient-to-r hover:from-[#d4efff] hover:to-[#86d7ff] hover:text-white"
                            }`}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-12 h-12 rounded-s-md overflow-hidden mb-1.5">
                                <Image
                                    src={
                                        category.smallImage?.asset?.url ||
                                        "/default.jpg"
                                    }
                                    alt={category.title || "Unnamed Category"}
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-xs font-bold text-center text-gray-700">
                                {category.title || "Unnamed Category"}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Banner and Description */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCategory?._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden transition-all duration-300"
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Text Section */}
                        {/* <div className="md:w-1/2 p-10 flex flex-col justify-center">
                            <h2 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#86d7ff] to-[#5eb8e0]">
                                {selectedCategory?.title || "Unnamed Category"}
                            </h2>
                            <p className="text-gray-500 mb-4 text-sm leading-relaxed tracking-wide">
                                {selectedCategory?.description ||
                                    "No description available."}
                            </p>
                            <button className="inline-flex max-w-40 max-h-20 items-center px-6 py-3 text-base font-semibold text-blue-500 bg-white border-4 border-[#86d7ff] rounded-full shadow-md hover:bg-gradient-to-r hover:from-blue-400 hover:to-[#86d7ff] hover:text-white transition-all duration-300 ease-in-out">
                                Explore
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </button>
                        </div> */}
                        <div className="md:w-1/2 p-10 flex flex-col justify-center">
                            <h2 className="text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#86d7ff] to-[#5eb8e0]">
                                {selectedCategory?.title || "Unnamed Category"}
                            </h2>
                            <p className="text-gray-500 mb-4 text-sm leading-relaxed tracking-wide">
                                {isSmallScreen && !isExpanded
                                    ? `${truncatedDescription}...`
                                    : descriptionText}
                                <span>
                                    {isSmallScreen && (
                                        <button
                                            onClick={() =>
                                                setIsExpanded(!isExpanded)
                                            }
                                            className="text-[#86d7ff] text-sm font-semibold"
                                        >
                                            {isExpanded
                                                ? "Show Less"
                                                : "Read More"}
                                        </button>
                                    )}
                                </span>
                            </p>

                            <Link
                                href={`/categories/${selectedCategory?.slug?.current}`}
                            >
                                <button className="inline-flex max-w-40 max-h-20 items-center px-6 py-3 text-base font-semibold text-[#86d7ff] bg-white border-4 border-[#86d7ff] rounded-full shadow-md hover:bg-gradient-to-r hover:from-blue-400 hover:to-[#86d7ff] hover:text-white transition-all duration-300 ease-in-out">
                                    Explore
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </button>
                            </Link>
                        </div>

                        {/* Banner Image Section */}
                        <div className="md:w-1/2 relative h-56 md:h-auto">
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.05 }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    duration: 5,
                                }}
                                className="w-full h-full lg:rounded-full overflow-hidden"
                            >
                                <Image
                                    src={
                                        selectedCategory?.bannerImage?.asset
                                            ?.url || "/default-banner.jpg"
                                    }
                                    alt={`${
                                        selectedCategory?.title || "Category"
                                    } banner`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
