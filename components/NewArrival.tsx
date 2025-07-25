"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface NewArrivalSectionProps {
    products: {
        _id: string;
        name: string;
        slug: { current: string };
        banner: { asset: { url: string } }[];
    }[];
}

export default function NewArrivalSection({
    products,
}: NewArrivalSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#86d7ff]/10 to-background py-16 px-4 md:px-8 lg:px-12">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold text-center mb-12"
                >
                    NEW ARRIVAL
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {products.map((product) => (
                        <motion.div key={product._id} variants={itemVariants}>
                            <Card className="group overflow-hidden border-2 border-transparent hover:border-[#86d7ff] transition-all duration-300">
                                <CardContent className="p-0 relative">
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={
                                                product.banner[0]?.asset?.url ||
                                                "/placeholder.jpg"
                                            }
                                            alt={product.name}
                                            fill
                                            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="absolute bottom-0 m-5 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                            {product.name}
                                        </h3>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-[#86d7ff] text-black px-6 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            onClick={() => {
                                                window.location.href = `/product/${product.slug.current}`;
                                            }}
                                        >
                                            Shop
                                        </motion.button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
