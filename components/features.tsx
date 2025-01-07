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
            icon: SecureCheckoutIcon,
            title: "Secure",
            subtitle: "Checkout",
        },
        {
            icon: FreeShippingIcon,
            title: "Free",
            subtitle: "Shipping",
        },
        {
            icon: EasyReturnsIcon,
            title: "Easy",
            subtitle: "Returns",
        },
        {
            icon: CashOnDeliveryIcon,
            title: "Cash On",
            subtitle: "Delivery*",
        },
        {
            icon: DomesticShippingIcon,
            title: "5-7 Days",
            subtitle: "Domestic Shipping",
        },
        {
            icon: QualityGuaranteedIcon,
            title: "Quality",
            subtitle: "Guaranteed",
        },
    ];

    return (
        <section className="w-full mt-8 py-16 px-4 md:px-6 bg-gray-100">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 gap-y-12 gap-x-6 sm:grid-cols-3 lg:grid-cols-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center text-center"
                        >
                            <feature.icon />
                            <h3 className="mt-4 text-sm font-medium text-gray-900">
                                {feature.title}
                                <br />
                                <span className="font-normal">
                                    {feature.subtitle}
                                </span>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
