"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useBasketStore from "../store";

function SuccessPage() {
    const router = useRouter();

    const searchParams = useSearchParams();
    const orderNumber = searchParams.get("orderNumber");
    const clearBasket = useBasketStore((state) => state.clearBasket);
    // const sessionId = searchParams.get("session_id");

    useEffect(() => {
        if (orderNumber) {
            clearBasket();
        }
    }, [orderNumber, clearBasket]);

    const handleShoppingClick = () => {
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-22 rounded-xl shadow-lg max-w-2xl w-full mx-4">
                <div className="flex justify-center mb-8">
                    <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                        {/* <svg
                            className="h-8 w-8 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 1314 4L19 7"
                            />
                        </svg> */}
                        <svg
                            className="h-8 w-8 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 12l4 4 6-6"
                            />
                        </svg>
                    </div>
                </div>
                <h1 className="text-4xl font-bold mb-6 text-center mx-4">
                    Thank You For Your Order!
                </h1>

                <div className="border-t border-b border-gray-200 py-6 mb-6">
                    <p className="text-lg text-gray-700 mb-4 text-center">
                        Your order is confirmed and will be shipped shortly.
                    </p>
                    <div className="space-y-2">
                        {orderNumber && (
                            <p className="text-gray-600 flex items-center justify-center space-x-5">
                                <span className="">Order Number:</span>
                                <span className="font-mono text-sm text-green-600">
                                    {orderNumber}
                                </span>
                            </p>
                        )}
                        {/* {sessionId && (
                            <p className="text-green-600 flex justify-between">
                                <span className="">Transaction ID:</span>
                                <span className="font-mono text-sm">
                                    {sessionId}
                                </span>
                            </p>
                        )} */}
                    </div>
                    <div className="space-y-2 text-center mt-2">
                        <Button
                            className="bg-blue-500 hover:bg-blue-700"
                            onClick={handleShoppingClick}
                        >
                            Continue shopping...
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuccessPage;
