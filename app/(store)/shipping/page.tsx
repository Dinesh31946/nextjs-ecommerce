"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, RedirectToSignIn } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import useBasketStore from "../store";
import { imageUrl } from "@/lib/imageUrl";
// import { v4 as uuidv4 } from "uuid";

// Import PayPalScriptProvider and PayPalButtons
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "kl91j914",
    dataset: "production",
    token: "skWLEFFIxKAlYzsPRNFpCyC2V3SABb5nFhJlwTvEfLMSeAyDJntOY7YtE4iYA7QWbL1NOvpjvHuc8WiiPvlAjKpYVtLlmguA2CYDHE2hUYm0CzbVbzj1zkobZUWZSTNyGgDSNPoc8KC0sPLNG2b6KPtaKmTMYNiQYR0Uciqy4Zt1msXgwOOb",
    apiVersion: "2023-01-01",
    useCdn: false,
});

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
}

// interface Product {
//     product: { _ref: string }; // Assuming 'product' is a reference to a 'product' document
//     quantity: number;
// }

export default function ShippingPage() {
    const router = useRouter();

    const { isLoaded, isSignedIn } = useAuth();

    const groupedItems = useBasketStore((state) => state.getGroupedItems());
    const totalAmount = useBasketStore.getState().getTotalPrice(); // Get total price from store

    // Redirect unauthenticated users to the login page
    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            alert("Please log in to access the shipping page.");
        }
    }, [isLoaded, isSignedIn]);

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    // State to track form submission
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsFormSubmitted(true); // Mark form as submitted
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    if (!isLoaded) {
        return <p>Loading...</p>; // Show a loading state while Clerk is initializing
    }

    if (!isSignedIn) {
        return <RedirectToSignIn />; // Redirect to Clerk's sign-in page
    }

    console.log("grouped Items:" + JSON.stringify(groupedItems));

    return (
        // Wrap the whole content in PayPalScriptProvider
        <PayPalScriptProvider
            options={{
                clientId:
                    "AeTp3S_5x4L4OKEY3ttmptK_BZs3pMPnOBxtrc-59-U9HbijM262T7OP0l9drV8dv5OCNc8yZgMP9t3M",
                currency: "USD",
            }}
        >
            <div className="container mx-auto px-8 py-8">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Shipping Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h2 className="text-2xl font-semibold mb-6">
                                Shipping Details
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Your form fields here */}
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        disabled={isFormSubmitted} // Disable fields after form submission
                                        className={cn(
                                            "w-full px-3 py-2 border rounded-md",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            "transition-colors"
                                        )}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        disabled={isFormSubmitted} // Disable fields after form submission
                                        className={cn(
                                            "w-full px-3 py-2 border rounded-md",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            "transition-colors"
                                        )}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        disabled={isFormSubmitted} // Disable fields after form submission
                                        className={cn(
                                            "w-full px-3 py-2 border rounded-md",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            "transition-colors"
                                        )}
                                        placeholder="1234567890"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="address"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Address
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        disabled={isFormSubmitted} // Disable fields after form submission
                                        rows={3}
                                        className={cn(
                                            "w-full px-3 py-2 border rounded-md",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            "transition-colors"
                                        )}
                                        placeholder="Enter your full address"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label
                                            htmlFor="city"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            disabled={isFormSubmitted} // Disable fields after form submission
                                            className={cn(
                                                "w-full px-3 py-2 border rounded-md",
                                                "focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                "transition-colors"
                                            )}
                                            placeholder="City"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="state"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            required
                                            value={formData.state}
                                            onChange={handleChange}
                                            disabled={isFormSubmitted} // Disable fields after form submission
                                            className={cn(
                                                "w-full px-3 py-2 border rounded-md",
                                                "focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                "transition-colors"
                                            )}
                                            placeholder="State"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="pincode"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Pincode
                                    </label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        name="pincode"
                                        required
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        disabled={isFormSubmitted} // Disable fields after form submission
                                        className={cn(
                                            "w-full px-3 py-2 border rounded-md",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            "transition-colors"
                                        )}
                                        placeholder="123456"
                                    />
                                </div>

                                {!isFormSubmitted && (
                                    <button
                                        type="submit"
                                        className={cn(
                                            "w-full bg-gradient-to-r from-[#86d7ff] to-blue-400 text-white font-bold py-2 px-4 rounded-md",
                                            "hover:bg-blue-700 transition-colors",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        )}
                                    >
                                        Continue to Payment
                                    </button>
                                )}
                            </form>
                        </div>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            <h2 className="text-2xl font-semibold mb-6">
                                Order Summary
                            </h2>
                            <div className="space-y-4">
                                {/* Render number of items dynamically */}
                                <div className="flex justify-between items-center text-sm">
                                    <span>Items:</span>
                                    <span>
                                        {groupedItems.reduce(
                                            (total, item) =>
                                                total + item.quantity,
                                            0
                                        )}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    {groupedItems?.map((item) => (
                                        <div
                                            key={item.product._id}
                                            className="flex gap-4 items-center"
                                        >
                                            <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden relative">
                                                {/* Dynamically load product image */}
                                                <Image
                                                    src={
                                                        item.product.images
                                                            ? imageUrl(
                                                                  item.product
                                                                      .images[0]
                                                              ).url()
                                                            : "/placeholder.svg"
                                                    }
                                                    alt={
                                                        item.product.name ||
                                                        "product image"
                                                    }
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium">
                                                    {item.product.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    Quantity: {item.quantity}
                                                </p>
                                            </div>
                                            <div className="font-medium">
                                                Rs{" "}
                                                {(
                                                    (item.product.mop ?? 0) *
                                                    item.quantity
                                                ).toFixed(2)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t pt-4 mt-4">
                                    <div className="flex justify-between items-center text-lg font-bold">
                                        <span>Total:</span>
                                        <span>Rs {totalAmount.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* PayPal Button (conditionally shown after form submission) */}
                {isFormSubmitted && (
                    <div className="mt-8">
                        <PayPalButtons
                            style={{ layout: "vertical" }}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    intent: "CAPTURE",
                                    purchase_units: [
                                        {
                                            amount: {
                                                currency_code: "USD", // Pass currency code here
                                                value: totalAmount.toFixed(2), // Pass total amount here
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return new Promise<void>((resolve, reject) => {
                                    if (actions?.order) {
                                        actions.order
                                            .capture()
                                            .then((details) => {
                                                // Capture PayPal transaction details
                                                // const payerName =
                                                //     details.payer?.name
                                                //         ?.given_name +
                                                //     " " +
                                                //     details.payer?.name
                                                //         ?.surname;
                                                // const payerEmail =
                                                //     details.payer
                                                //         ?.email_address;
                                                // const payerId =
                                                //     details.payer?.payer_id;
                                                const transactionId =
                                                    details.id;

                                                // Ensure that 'purchase_units' exists and is not empty
                                                const purchaseUnit =
                                                    details.purchase_units?.[0];

                                                const amount =
                                                    purchaseUnit?.amount
                                                        ?.value ?? "0";
                                                const currency =
                                                    purchaseUnit?.amount
                                                        ?.currency_code;

                                                // If 'purchase_units' is undefined or empty, handle it
                                                if (!purchaseUnit) {
                                                    console.error(
                                                        "No purchase units found in the transaction."
                                                    );
                                                    return;
                                                }

                                                // Prepare order details
                                                // const orderDate =
                                                //     new Date().toISOString();
                                                // const status = "paid"; // Assuming the payment was successful

                                                //capturing the product details
                                                // const products =
                                                //     groupedItems.map(
                                                //         (item) => ({
                                                //             _key: crypto.randomUUID(),
                                                //             product: {
                                                //                 _type: "reference",
                                                //                 _ref: item
                                                //                     .product
                                                //                     ._id, // Reference to the correct product
                                                //             },
                                                //             quantity:
                                                //                 item.quantity,
                                                //         })
                                                //     );

                                                const products = groupedItems
                                                    .filter(
                                                        (item) =>
                                                            item.product &&
                                                            item.product._id // Ensure valid product references
                                                    )
                                                    .map((item) => ({
                                                        _key: crypto.randomUUID(), // Unique key for Sanity array
                                                        productId: {
                                                            _type: "reference", // Specify this is a reference type
                                                            _ref: item.product
                                                                ._id, // Reference the product document ID
                                                        },
                                                        quantity: item.quantity,
                                                        price: item.product.mop, // Minimum Operating Price
                                                    }));

                                                client
                                                    .create({
                                                        _type: "order",
                                                        orderNumber:
                                                            transactionId,
                                                        paypalTransactionId:
                                                            transactionId,
                                                        customerName:
                                                            formData.fullName,
                                                        email: formData.email,
                                                        phone: formData.phone,
                                                        address:
                                                            formData.address,
                                                        city: formData.city,
                                                        state: formData.state,
                                                        pincode:
                                                            formData.pincode,
                                                        products, // Transformed products array
                                                        totalPrice:
                                                            parseFloat(amount),
                                                        currency: currency,
                                                        status: "paid",
                                                        orderDate:
                                                            new Date().toISOString(),
                                                    })
                                                    .then((createdOrder) => {
                                                        console.log(
                                                            "Order created successfully:",
                                                            createdOrder
                                                        );
                                                    })
                                                    .catch((error) => {
                                                        console.error(
                                                            "Error saving order in Sanity:",
                                                            error
                                                        );
                                                        alert(
                                                            "Failed to save order details."
                                                        );
                                                    });

                                                // if (payerName) {
                                                //     alert(
                                                //         "Transaction completed by " +
                                                //             payerName
                                                //     );
                                                // } else {
                                                //     alert(
                                                //         "Transaction completed, but payer name is unavailable."
                                                //     );
                                                // }
                                                // Resolve the promise after completion
                                                resolve();
                                                // "Order saved successfully in Sanity!"
                                                router.push(
                                                    `/success?orderNumber=${transactionId}`
                                                );
                                            })
                                            .catch((err) => {
                                                console.error(
                                                    "Error capturing order:",
                                                    err
                                                );
                                                reject(err);
                                            });
                                    } else {
                                        console.error(
                                            "Order action is undefined"
                                        );
                                        reject("Order action is undefined");
                                    }
                                });
                            }}
                            onError={(err) => {
                                console.error(
                                    "Error with PayPal transaction:",
                                    err
                                );
                            }}
                        />
                    </div>
                )}
            </div>
        </PayPalScriptProvider>
    );
}
