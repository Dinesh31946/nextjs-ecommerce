"use client";

import {
    ClerkLoaded,
    SignedIn,
    SignInButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import Image from "next/image";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";
import useBasketStore from "@/app/(store)/store";
import MovingTextBanner from "./MovingTextBanner";
import Logo from "./Logo";

const Header = () => {
    const { user } = useUser();

    const itemCount = useBasketStore((state) =>
        state.items.reduce((total, item) => total + item.quantity, 0)
    );

    const createClerkPasskey = async () => {
        try {
            const response = await user?.createPasskey();
            console.log(response);
        } catch (err) {
            console.error("Error:", JSON.stringify(err, null, 2));
        }
    };

    return (
        <header className="flex flex-wrap justify-between items-center  py-2">
            <MovingTextBanner />
            {/* Top row */}
            <div className="flex flex-wrap w-full mt-2 justify-between items-center">
                {/* <Link
                    href="/"
                    className="text-2xl font-bold text-blue-500 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
                >
                    SpectraStore
                </Link> */}
                <Link
                    href="/"
                    className="text-3xl font-extrabold text-gradient from-blue-500 to-purple-500 hover:opacity-80 cursor-pointer mx-auto sm:mx-0 flex items-center"
                    aria-label="SpectraStore Logo"
                >
                    {/* <Logo /> */}

                    {/* Logo Image */}
                    <div className="ml-4 flex items-center">
                        <Image
                            src="/images/new-logo2.png" // Path to your logo image
                            alt="SpectraStore Logo"
                            width={150}
                            height={150}
                            className="object-contain"
                            sizes="(max-width: 640px) 100px, (max-width: 1024px) 150px, 200px"
                            priority
                        />
                    </div>
                </Link>

                <Form
                    action="/search"
                    className="w-full sm:w-auto sm:flex-1 px-4 sm:mx-4 mt-2 sm:mt-0"
                >
                    <input
                        type="text"
                        name="query"
                        placeholder="Search for products"
                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
                    />
                </Form>

                <div className="flex items-center space-x-4 mt-4 px-4 sm:mt-0 flex-1 sm:flex-none">
                    <Link
                        href="/basket"
                        className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-gradient-to-r from-[#86d7ff] to-blue-400 text-white font-bold py-2 px-4 rounded-md shadow-lg border border-transparent hover:bg-gradient-to-l hover:from-blue-500 hover:to-[#86d7ff] transition-all duration-150 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#86d7ff]"
                    >
                        <TrolleyIcon className="w-6 h-6 transition-transform duration-150 ease-out hover:scale-110" />
                        {/* Span item count once global state is implemented */}
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold shadow-sm">
                            {itemCount}
                        </span>
                        <span className="transition-all duration-150 ease-out transform hover:scale-105">
                            My Basket
                        </span>
                    </Link>

                    {/* User Area */}
                    <ClerkLoaded>
                        <SignedIn>
                            <Link
                                href="/orders"
                                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-gradient-to-r from-[#86d7ff] to-blue-400 text-white font-bold py-2 px-4 rounded-md shadow-lg border border-transparent hover:bg-gradient-to-l hover:from-blue-500 hover:to-[#86d7ff] transition-all duration-150 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#86d7ff]"
                            >
                                <PackageIcon className="w-6 h-6 transition-transform duration-150 ease-out hover:scale-110" />
                                <span className="transition-all duration-150 ease-out transform hover:scale-105">
                                    My Orders
                                </span>
                            </Link>
                        </SignedIn>

                        {user ? (
                            <div className="flex items-center space-x-2">
                                <UserButton />
                                <div className="hidden sm:block text-xs">
                                    <p className="text-gray-400">
                                        Welcome Back
                                    </p>
                                    <p className="font-bold">
                                        {user.fullName}!
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <SignInButton mode="modal" />
                        )}

                        {user?.passkeys.length === 0 && (
                            <button
                                onClick={createClerkPasskey}
                                className="bg-white hover:bg-blue-700 hover:text-white animate-pulse text-blue-500 font-bold py-2 px-4 rounded border-blue-300 border"
                            >
                                Create Passkey
                            </button>
                        )}
                    </ClerkLoaded>
                </div>
            </div>
        </header>
    );
};

export default Header;
