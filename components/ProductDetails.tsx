"use client";

// import { useId, useState, useEffect } from "react";
import { ImageCarousel } from "./ui/image-carousel";
// import { KeyFeature } from "./ui/key-feature";
import { AddToCartButton } from "./ui/add-to-cart-button";
import VideoCardList from "./ui/video-card";
import Accordion from "./ui/accordion";
import FAQAccordionList from "./ui/FAQAccordionList";

interface ProductDetailsProps {
    _id: string;
    _type: "product";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    images: string[];
    mrp: number;
    mop: number;
    description: { children: { text: string }[]; _key: string }[]; // Update type for `description`
    banner?: string[];
    stock?: number;
    videoCards: {
        _id: string;
        title: string;
        description: string;
        videoUrl: string;
    }[];
    howToUse?: { _id: string; title: string; description: string } | null;
    faqs: {
        _id: string;
        question: string;
        answer: string;
    }[];
}

export function ProductDetails({
    _id,
    _type,
    _createdAt,
    _updatedAt,
    _rev,
    name,
    images,
    mrp,
    mop,
    description,
    videoCards,
    howToUse,
    faqs,
}: ProductDetailsProps) {
    // Create a product object
    const product = {
        _id,
        _type,
        _createdAt,
        _updatedAt,
        _rev,
        name,
        images,
        mrp,
        mop,
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
                    {/* Left Column */}
                    <ImageCarousel images={images} />

                    {/* Right Column */}
                    <div className="mt-10 sm:mt-16 lg:mt-0">
                        <h1 className="text-4xl font-extrabold text-gray-900">
                            {name}
                        </h1>
                        {/* <p className="mt-4 text-gray-600">{description}</p> */}
                        {description.map((block) => (
                            <p key={block._key} className="mt-2">
                                {block.children.map((child, childIndex) => (
                                    <span key={childIndex}>{child.text}</span>
                                ))}
                            </p>
                        ))}

                        {/* Key Features */}
                        {/* {Array.isArray(features) && features.length > 0 && (
                            <div className="mt-6">
                                <h3 className="text-lg font-medium">
                                    Key Features
                                </h3>
                                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <KeyFeature
                                            key={index}
                                            feature={feature}
                                        />
                                    ))}
                                </div>
                            </div>
                        )} */}

                        {/* Pricing */}
                        <div className="mt-6 flex items-center space-x-4">
                            <p className="text-4xl font-bold text-gray-900">
                                ₹{mop}
                            </p>
                            <p className="text-2xl text-gray-500 line-through">
                                ₹{mrp}
                            </p>
                            <p className="text-green-500">
                                {Math.round((1 - mop / mrp) * 100)}% off
                            </p>
                        </div>

                        <div className="mb-8 mt-8">
                            <AddToCartButton product={product} />
                        </div>
                    </div>
                </div>
            </div>

            {videoCards?.length > 0 && (
                <>
                <hr className="my-2 border-t-2 border-gray-300" />
                <VideoCardList videoCards={videoCards} />
                </>
            )}

            {/* Accordion */}
            {howToUse && (
                <>
                    <hr className="my-2 border-t-2 border-gray-300" />
                    <Accordion title={howToUse.title} description={howToUse.description} />
                </>
            )}

            <hr className="my-2 border-t-2 border-gray-300" />
            <div className="py-12 text-center px-6 max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
                    Guaranteed Results ✨
                </h2>
                <p className="text-gray-800 text-base sm:text-lg">
                    <strong>PositiveGems Long-Time</strong> has amazed millions of people around the World
                    with mind blowing results.
                </p>
                <p className="text-gray-800 text-base sm:text-lg mt-2">
                    We have 95% Repeat customer rate, meaning,
                </p>
                <p className="text-gray-900 text-base sm:text-lg mt-1 font-semibold">
                    For every 100 buyers, 95 comes back to buy more.
                </p>
            </div>

            {faqs?.length > 0 && (
                <>
                <hr className="my-6 border-t-2 border-gray-300" />
                <FAQAccordionList faqs={faqs} />
                </>
            )}

        </>
    );
}
