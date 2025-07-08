// app/api/actions/submitReachUsForm/route.ts
import { backendClient } from "../../../sanity/lib/backendClient"; // Your backend client import
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.json();

        // Get the current date and time in ISO string format
        const currentDate = new Date().toISOString();

        // Create a new document in Sanity
        const doc = await backendClient.create({
            _type: "reachUsForm", // Ensure this matches your schema in Sanity
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phoneNumber || undefined, // Optional field
            summary: formData.summary,
            submittedAt: currentDate,
        });

        return NextResponse.json({
            message: "Form submitted successfully",
            doc,
        });
    } catch (error) {
        console.error("Error submitting form: ", error);
        return NextResponse.json(
            { message: "Error submitting form" },
            { status: 500 }
        );
    }
}
