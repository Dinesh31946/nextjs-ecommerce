import React from "react";
import {
    SecureCheckoutIcon,
    FreeShippingIcon,
    EasyReturnsIcon,
    CashOnDeliveryIcon,
    DomesticShippingIcon,
    QualityGuaranteedIcon,
} from "./custom-icons";

export function Features() {
    const features = [
        {
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <SecureCheckoutIcon {...props} />
            ),
            title: "Secure Checkout",
            description: "Your transactions are always safe with us",
        },
        {
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <FreeShippingIcon {...props} />
            ),
            title: "Free Shipping",
            description: "Enjoy free shipping on all orders over $50",
        },
        {
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <EasyReturnsIcon {...props} />
            ),
            title: "Easy Returns",
            description: "30-day hassle-free return policy",
        },
        {
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <CashOnDeliveryIcon {...props} />
            ),
            title: "Cash On Delivery",
            description: "Pay when you receive your order*",
        },
        {
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <DomesticShippingIcon {...props} />
            ),
            title: "Fast Domestic Shipping",
            description: "Get your order in 5-7 business days",
        },
        {
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <QualityGuaranteedIcon {...props} />
            ),
            title: "Quality Guaranteed",
            description: "We stand behind the quality of our products",
        },
    ];

    return (
        <section className="w-full py-16 px-4 md:px-6 bg-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Why Choose Us
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-xl hover:bg-gray-100"
                        >
                            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary-100">
                                <feature.icon className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
