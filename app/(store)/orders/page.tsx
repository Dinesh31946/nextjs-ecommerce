"use client"; // Ensures the file runs on the client side

import { useOrders } from "@/components/OrderDataFetcher"; // Import the custom hook
import OrderList from "@/components/OrderList"; // Import the OrderList component

export default function OrdersPage() {
    // Use the useOrders hook to fetch orders
    const { orders, loading, error } = useOrders();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Orders</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <OrderList orders={orders} /> // Pass orders to OrderList
            )}
        </div>
    );
}
