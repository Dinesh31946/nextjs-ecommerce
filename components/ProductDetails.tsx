"use client";

// import { useId, useState, useEffect } from "react";
import { ImageCarousel } from "./ui/image-carousel";
// import { KeyFeature } from "./ui/key-feature";
import { AddToCartButton } from "./ui/add-to-cart-button";
// import { ServiceIcons } from "./ui/service-icons";
import VideoCard from "./ui/video-card";
import Accordion from "./ui/how-to-use";

interface ProductDetailsProps {
    _id: string;
    _type: "product";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name: string;
    images: string[];
    features?: string[]; // Make this optional
    mrp: number;
    mop: number;
    description: { children: { text: string }[]; _key: string }[]; // Update type for `description`
    banner?: string[];
    stock?: number;
    videoCards?: {
        _id: string;
        videoUrl: string;
        description: string;
    }[];
    howToUseCard?: {
        _id: string;
        title: string;
        description: string;
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
    // features = [], // Default to an empty array
    mrp,
    mop,
    description,
    videoCards = [],
    howToUseCard = [],
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
            {/* <ServiceIcons /> */}
            
            <hr className="my-8 border-t-2 border-gray-300" />
            {videoCards.length > 0 && (
                <div className="">
                    <div className="text-4xl font-bold text-center my-6">
                        Benefits
                    </div>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center px-4 pb-12">
                        {videoCards.map((card) => (
                            <VideoCard
                            key={card._id}
                            videoUrl={card.videoUrl}
                            description={card.description}
                            />
                        ))}
                    </div>
                </div>
            )}

            <hr className="my-8 border-t-2 border-gray-300" />

            <div className="bg-gray-50">
                <div className="py-20  space-y-12">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
                        How to use it
                    </h2>

                    {/* <Accordion
                    title="How to use it?"
                    description="This product offers excellent durability, top-tier performance, and eco-friendly materials. It's designed to deliver maximum satisfaction and long-term usage benefits."
                    /> */}
                    {howToUseCard.map((card) => (
                        <Accordion
                            key={card._id}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>

            <hr className="my-8 border-t-2 border-gray-300" />

            <div className="">
                <div className="text-center py-20 px-4 bg-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                        Guaranteed Results ✨
                    </h2>

                    <p className="text-lg md:text-xl text-gray-800 font-semibold mb-2">
                        <strong>PositiveGems Long-Time</strong> has amazed millions of people around the World with mind blowing results.
                    </p>

                    <p className="text-base md:text-lg text-gray-700 mb-1">
                        We have 95% Repeat customer rate, meaning,
                    </p>

                    <p className="text-base md:text-lg font-semibold text-gray-900">
                        For every 100 buyers, 95 comes back to buy more.
                    </p>
                </div>
            </div>

        </>
    );
}
