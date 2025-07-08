import { Check } from "lucide-react";

interface KeyFeatureProps {
    feature: string;
}

export function KeyFeature({ feature }: KeyFeatureProps) {
    return (
        <div className="flex items-center space-x-3 group">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#86d7ff] flex items-center justify-center group-hover:bg-[#5ec9ff] transition-colors duration-300">
                <Check className="h-3 w-3 text-white" />
            </div>
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {feature}
            </span>
        </div>
    );
}
