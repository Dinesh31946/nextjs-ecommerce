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
    },
    {
        icon: Truck,
        label: "Free Shipping",
    },
    {
        icon: RotateCcw,
        label: "Easy Returns",
    },
    {
        icon: Wallet,
        label: "Cash On Delivery",
    },
    {
        icon: Clock,
        label: "5-7 Days Domestic Shipping",
    },
    {
        icon: Award,
        label: "Quality Guaranteed",
    },
];

export function ServiceIcons() {
    return (
        <div className="flex flex-wrap justify-between gap-4 items-start border-t border-gray-200 pt-6">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center text-center flex-1 min-w-[140px] group"
                >
                    <div className="p-3 rounded-full bg-[#86d7ff]/10 mb-2 group-hover:bg-[#86d7ff]/20 transition-colors duration-300">
                        <service.icon className="w-5 h-5 text-[#86d7ff]" />
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                        {service.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
