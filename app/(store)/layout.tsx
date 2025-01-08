import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { Footer } from "@/components/footer";
import FeaturesRenderer from "@/components/FeaturesRenderer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Spectra Store",
    description: "Spectra Store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider dynamic>
            <html lang="en">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                    <main>
                        <Header />
                        {children}
                        {/* Render Features only on the home page */}
                        <FeaturesRenderer />
                        <Footer />
                    </main>

                    <SanityLive />
                </body>
            </html>
        </ClerkProvider>
    );
}
