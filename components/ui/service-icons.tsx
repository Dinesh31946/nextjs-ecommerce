"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Truck,
    RotateCcw,
    Wallet,
    Clock,
    Award,
} from "lucide-react";

const services = [
    {
        icon: ShieldCheck,
        label: "Secure Checkout",
        description: "Your transactions are always safe",
    },
    {
        icon: Truck,
        label: "Free Shipping",
        description: "On orders over $50",
    },
    {
        icon: RotateCcw,
        label: "Easy Returns",
        description: "30-day hassle-free policy",
    },
    {
        icon: Wallet,
        label: "Cash On Delivery",
        description: "Pay when you receive",
    },
    {
        icon: Clock,
        label: "Fast Shipping",
        description: "5-7 days domestic delivery",
    },
    {
        icon: Award,
        label: "Quality Guaranteed",
        description: "We stand by our products",
    },
];

export function ServiceIcons() {
    return (
        <section className="pb-12 px-4 bg-gradient-to-b from-white to-[#e6f5ff] mb-5">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[#86d7ff] to-[#5eb8e0]">
                    Our Services
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <motion.div
                                className="p-4 rounded-full bg-[#86d7ff]/10 mb-4 group-hover:bg-[#86d7ff] transition-colors duration-300"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                <service.icon className="w-8 h-8 text-[#86d7ff] group-hover:text-white transition-colors duration-300" />
                            </motion.div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#5eb8e0] transition-colors duration-300">
                                {service.label}
                            </h3>
                            <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
