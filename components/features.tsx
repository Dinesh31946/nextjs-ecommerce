"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Shield,
    Truck,
    RefreshCcw,
    CreditCard,
    Package,
    Award,
} from "lucide-react";

export function Features() {
    const features = [
        {
            icon: Shield,
            title: "Secure Checkout",
            description: "Your transactions are always safe with us",
        },
        {
            icon: Truck,
            title: "Free Shipping",
            description: "Enjoy free shipping on all orders over $50",
        },
        {
            icon: RefreshCcw,
            title: "Easy Returns",
            description: "30-day hassle-free return policy",
        },
        {
            icon: CreditCard,
            title: "Cash On Delivery",
            description: "Pay when you receive your order*",
        },
        {
            icon: Package,
            title: "Fast Domestic Shipping",
            description: "Get your order in 5-7 business days",
        },
        {
            icon: Award,
            title: "Quality Guaranteed",
            description: "We stand behind the quality of our products",
        },
    ];

    return (
        <section className="w-full py-16 px-4 md:px-6 bg-gradient-to-b from-white to-[#e6f5ff]">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-[#86d7ff] to-[#5eb8e0]">
                    Why Choose Us
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out group"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-[#86d7ff] group-hover:bg-[#5eb8e0] transition-colors duration-300">
                                <feature.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="mb-3 text-2xl font-semibold text-gray-800 group-hover:text-[#5eb8e0] transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
