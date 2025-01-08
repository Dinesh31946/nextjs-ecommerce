import ContactForm from "./contact-form";

export const metadata = {
    title: "Contact Us | Your Company",
    description: "Get in touch with us for any inquiries or support.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 text-center mb-12">
                    Get in Touch
                </h1>
                <div className="bg-white shadow-2xl rounded-3xl overflow-hidden md:flex">
                    <div className="md:w-1/2 bg-blue-600 p-8 sm:p-12 text-white flex flex-col justify-center">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                            Let&apos;s Connect
                        </h2>
                        <p className="mb-8 text-base sm:text-lg">
                            We&apos;re here to help and answer any question you
                            might have. We look forward to hearing from you!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <p>123 Innovation Drive, Tech City, TC 12345</p>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <p>contact@yourcompany.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-8 sm:p-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
