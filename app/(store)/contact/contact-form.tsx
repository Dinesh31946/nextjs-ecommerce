"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        summary: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //     setSubmitMessage("");

    //     // Simulate API call
    //     await new Promise((resolve) => setTimeout(resolve, 1000));

    //     // Here you would typically send the data to your API
    //     console.log(formData);

    //     setIsSubmitting(false);
    //     setSubmitMessage(
    //         "Thank you for your message. We'll get back to you soon!"
    //     );
    //     setFormData({ fullName: "", email: "", phoneNumber: "", summary: "" });
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");

        try {
            // Send form data to the API route
            const response = await fetch("/api/submitReachUsForm", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            // Handle success message
            setSubmitMessage(result.message);
            setFormData({
                fullName: "",
                email: "",
                phoneNumber: "",
                summary: "",
            });
        } catch (error) {
            console.error("Error submitting form: ", error);
            setSubmitMessage("An error occurred. Please try again.");
        }

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                />
            </div>
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                />
            </div>
            <div>
                <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Phone Number (optional)
                </label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                />
            </div>
            <div>
                <label
                    htmlFor="summary"
                    className="block text-sm font-medium text-gray-700 mb-1"
                >
                    Summary
                </label>
                <textarea
                    id="summary"
                    name="summary"
                    rows={4}
                    value={formData.summary}
                    minLength={10}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 resize-none"
                ></textarea>
            </div>
            <div>
                {/* <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button> */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-6 border border-[#86d7ff] rounded-md shadow-md text-md font-semibold text-[#86d7ff] bg-white hover:bg-gradient-to-r hover:from-[#86d7ff] hover:to-blue-500 hover:text-white transition-all duration-200 ease-out transform hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-[#86d7ff] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="transition-transform duration-200 ease-out transform hover:scale-125">
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </span>
                </button>
            </div>
            {submitMessage && (
                <div className="mt-4 text-sm text-green-600">
                    {submitMessage}
                </div>
            )}
        </form>
    );
}
