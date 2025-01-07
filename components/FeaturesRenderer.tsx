"use client";

import { usePathname } from "next/navigation";
import { Features } from "./features";

export default function FeaturesRenderer() {
    const pathname = usePathname();

    return pathname === "/" ? <Features /> : null;
}
