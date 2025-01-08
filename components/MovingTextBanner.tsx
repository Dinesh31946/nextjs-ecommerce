"use client";

import { useEffect, useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
// import { getActiveOfferText } from "@/sanity/lib/offertext/getActiveOfferText";

export default function MovingTextBanner() {
    const [animate, setAnimate] = useState(false);
    const [offerText, setOfferText] = useState<string | null>(null);

    useEffect(() => {
        setAnimate(true);

        // Fetch active offer text
        const fetchOfferText = async () => {
            try {
                // Replace this URL with your Sanity API endpoint or function
                const query = encodeURIComponent(
                    `*[_type == 'offertext' && isActive == true][0]{offertext}`
                );
                const url = `https://kl91j914.api.sanity.io/v1/data/query/production?query=${query}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setOfferText(data.result?.offertext);
            } catch (error) {
                console.error("Error fetching offer text:", error);
            }
        };

        fetchOfferText();
    }, []);

    return (
        <div className="top-0 left-0 w-full bg-blue-500 text-primary-foreground z-50 overflow-hidden flex items-center justify-between">
            <div className="flex-grow overflow-hidden">
                <div
                    className={`whitespace-nowrap py-1 text-sm ${
                        animate ? "animate-marquee" : ""
                    }`}
                >
                    <span className="inline-block px-4">{offerText}</span>
                    {/* <span className="inline-block px-4">{offerText}</span> */}
                </div>
            </div>
            <div className="flex items-center space-x-4 px-4">
                <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Facebook className="w-4 h-4 text-primary-foreground" />
                </Link>
                <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram className="w-4 h-4 text-primary-foreground" />
                </Link>
                <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Youtube className="w-4 h-4 text-primary-foreground" />
                </Link>
            </div>
        </div>
    );
}
