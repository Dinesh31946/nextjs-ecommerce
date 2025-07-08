import Link from "next/link";
import {
    Facebook,
    Instagram,
    Youtube,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-gradient-to-br from-[#86d7ff] via-[#b3e9ff] to-[#e6f7ff] text-gray-900 py-16 px-6 md:px-10 lg:px-20">
            <div className="mx-auto max-w-7xl">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand and Tagline */}
                    <div>
                        <h2 className="text-2xl font-bold tracking-wide text-gray-800">
                            SepctraStore
                        </h2>
                        <p className="mt-4 text-gray-700">
                            Bringing comfort and style to your doorstep.
                            Experience the best in quality and design.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Link
                                href="https://facebook.com"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-8 w-8 hover:scale-110 text-gray-800 transition-transform" />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-8 w-8 hover:scale-110 text-gray-800 transition-transform" />
                            </Link>
                            <Link
                                href="https://youtube.com"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-8 w-8 hover:scale-110 text-gray-800 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">
                                Shop
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/bestsellers"
                                        className="hover:underline"
                                    >
                                        Bestsellers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/trending"
                                        className="hover:underline"
                                    >
                                        Trending Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/new-arrivals"
                                        className="hover:underline"
                                    >
                                        New Arrivals
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/under-1000"
                                        className="hover:underline"
                                    >
                                        Under ₹ 1000
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">
                                Company
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="/about"
                                        className="hover:underline"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:underline"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/termsofservice"
                                        className="hover:underline"
                                    >
                                        Terms Of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/privacy"
                                        className="hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-800">
                            Reach Us
                        </h3>
                        <ul className="space-y-4 text-gray-700">
                            <li className="flex items-center space-x-3">
                                <MapPin className="h-6 w-6 text-gray-800" />
                                <span>
                                    123 Innovation Drive, Tech City, TC 12345
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-6 w-6 text-gray-800" />
                                <span>+91-1234567890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-6 w-6 text-gray-800" />
                                <span>care@positivegems.life</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-400 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
                    <p>
                        © {new Date().getFullYear()} PostiveGems. All rights
                        reserved.
                    </p>
                    <ul className="flex space-x-4 mt-4 md:mt-0">
                        <li>
                            <Link href="/terms" className="hover:underline">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link href="/refund" className="hover:underline">
                                Refund Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/shipping" className="hover:underline">
                                Shipping Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
