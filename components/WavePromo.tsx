"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WavePromo() {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
            <Image
                src="/images/Home-Banner-2.jpeg?height=500&width=1000"
                alt="E-commerce promotional background"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 320"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        fill="#86d7ff"
                        fillOpacity="0.8"
                        d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        animate={{
                            d: [
                                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,165.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                            ],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 10,
                            ease: "easeInOut",
                        }}
                    />
                </svg>
            </motion.div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Summer Sale is Here!
                </motion.h2>
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Up to 50% off on all products
                </motion.p>
                <motion.button
                    className="bg-[#86d7ff] text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#86d7ff] transition-colors duration-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Shop Now
                </motion.button>
            </div>
        </div>
    );
}
