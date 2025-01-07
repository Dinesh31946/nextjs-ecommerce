"use client";

import React from "react";

export default function RefundPolicyPage() {
    return (
        <div className="p-6 max-w-4xl mx-auto text-gray-800">
            <h1 className="text-3xl font-bold text-blue-500 mb-6">
                Return and Refund Policy for Spectrastore.in
            </h1>

            <p className="mb-4">
                At Spectrastore.in, we have a 7-day return policy for most
                domestic orders (within Indian territory), which means you can
                request a return within 7 days of receiving your item.
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                Eligibility for Returns
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    The item must be in the same condition as received, unworn
                    or unused, with tags, and in its original packaging.
                </li>
                <li>A receipt or proof of purchase must be provided.</li>
                <li>
                    An uninterrupted unboxing video of the untampered parcel is
                    mandatory for us to process your return smoothly and
                    quickly.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                How to Start a Return
            </h2>
            <p className="mb-4">
                To initiate a return, please email us at{" "}
                <a
                    href="mailto:care@spectrastore.in"
                    className="text-blue-500 underline"
                >
                    care@spectrastore.in
                </a>
                . If your return is accepted, we will provide detailed
                instructions on how and where to send your package. Items sent
                back to us without prior approval will not be accepted and will
                incur a shipping fee for return to the sender.
            </p>
            <p className="mb-4">
                <strong>Return Address:</strong>
                <br />
                Spectrastore
                <br />
                33, Chaudrana, Near Dulhan Marriage Hall,
                <br />
                Fatehpur, UP 212601
            </p>
            <p className="mb-4">
                For any return-related queries, contact us at{" "}
                <a
                    href="mailto:care@spectrastore.in"
                    className="text-blue-500 underline"
                >
                    care@spectrastore.in
                </a>
                .
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                Non-Returnable Items
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>Products with wheels (e.g., cars, bikes, prams, etc.)</li>
                <li>
                    International shipment items (products tagged as
                    “Spectrastore HK” or “Spectrastore UK”)
                </li>
                <li>Clearance sale items or items in the 50-70% off section</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                Damages and Issues
            </h2>
            <p className="mb-4">
                Please inspect your order upon reception and contact us
                immediately if the item is defective, damaged, or the wrong item
                was received.
            </p>
            <ul className="list-disc list-inside mb-4">
                <li>
                    A clear and uninterrupted unboxing video showing the full
                    product and damage is required for us to process the claim.
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                Size Issues
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>
                    <strong>Indian warehouse products:</strong> We offer
                    exchanges for size issues in clothing, bags, and footwear.
                </li>
                <li>
                    <strong>International warehouse products:</strong> No size
                    replacements are offered. Refer to the size chart in the
                    product description to choose the correct size.
                </li>
            </ul>
            <p className="mb-4">
                Manual measurements may have a human error margin of 1-3 cm,
                especially for soft toys.
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                Exceptions to Returns
            </h2>
            <ul className="list-disc list-inside mb-4">
                <li>Innerwear</li>
                <li>Custom or personalized products</li>
                <li>Toys</li>
                <li>
                    Hazardous materials, batteries, flammable liquids, or gases
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                Duties and Taxes
            </h2>
            <p className="mb-4">
                For ODD products (international shipments), local duties and
                taxes may apply and will be collected by the logistics company.
                Customers are responsible for providing KYC documents and paying
                duties or taxes as required to ensure parcel delivery.
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                Exchanges
            </h2>
            <p className="mb-4">
                To exchange an item, we recommend returning the item first (if
                eligible) and placing a separate order for the new item.
            </p>

            <h2 className="text-2xl font-semibold text-blue-500 mt-8 mb-4">
                Refunds
            </h2>
            <p className="mb-4">
                Once we receive and inspect your return, we will notify you if
                the refund is approved. If approved, the refund will be
                processed back to your original payment method within 10
                business days.
            </p>
            <p className="mb-4">
                If more than 15 business days have passed since your return was
                approved and you have not received your refund, please contact
                us at{" "}
                <a
                    href="mailto:care@spectrastore.in"
                    className="text-blue-500 underline"
                >
                    care@spectrastore.in
                </a>
                .
            </p>
        </div>
    );
}
