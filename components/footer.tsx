import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-blue-50 py-12 px-4 md:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {/* Important Links */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold text-gray-900">
                            Important Links
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/request"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Request a Product
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shipping"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Shipping policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/refundpolicy"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Refund Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/termsofservice"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Terms of service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold text-gray-900">
                            Shop
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/bestsellers"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Bestsellers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/trending"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Trending Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/featured"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Featured
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/new-arrivals"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/under-1000"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Under ₹ 1000
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold text-gray-900">
                            Company
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/company-details"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Company Details
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* My Account */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold text-gray-900">
                            My Account
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/login"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cart"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    My Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/wishlist"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Wishlist
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Reach Us */}
                    <div>
                        <h3 className="mb-6 text-base font-semibold text-gray-900">
                            Reach Us
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-600">Between Mon-Sat</p>
                            <p className="text-gray-600">(10 AM to 6 PM IST)</p>
                            <p className="text-gray-600">+91-8004241888</p>
                            <p className="text-gray-600">care@bearhugs.in</p>
                            <div className="flex space-x-4 pt-2">
                                <Link
                                    href="https://facebook.com"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    <Facebook className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="https://instagram.com"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    <Instagram className="h-6 w-6" />
                                </Link>
                                <Link
                                    href="https://youtube.com"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    <Youtube className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
