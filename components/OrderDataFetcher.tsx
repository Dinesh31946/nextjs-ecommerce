"use client"; // Ensures the file runs on the client side

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Import the sanity client
import { Order } from "@/app/(store)/orders/types";

// Define types for the fetched data
interface Product {
    name: string;
    price: number;
}

// interface ProductItem {
//     product: Product | null;
//     quantity: number;
// }

interface SanityOrder {
    orderNumber: string;
    orderDate: string;
    status: string;
    totalPrice: number;
    products: {
        product: Product | null;
        quantity: number;
    }[];
}

// Define the async function to fetch orders from Sanity
const fetchOrders = async (): Promise<Order[]> => {
    const query = `*[_type == "order"]{
            _id,
            orderNumber,
            orderDate,
            status,
            totalPrice,
            products[] {
                product->{ 
                    name,
                    mop
                },
                quantity
            }
        }`;

    try {
        const orders: SanityOrder[] = await client.fetch(query); // Type the fetched data

        // Safeguard: Ensure the 'product' exists before trying to access it
        return orders.map((order) => ({
            id: order.orderNumber,
            date: new Date(order.orderDate).toLocaleDateString(),
            status: order.status as Order["status"],
            total: order.totalPrice,
            items: order.products
                .map((item) => {
                    // Safeguard against null or undefined product
                    const product = item.product || null;
                    return {
                        product,
                        quantity: item.quantity,
                    };
                })
                .filter(
                    (item) =>
                        item.product !== null && item.product !== undefined
                ), // Filter out items with null or undefined product
        }));
    } catch (error) {
        console.error("Error fetching orders:", error);
        throw new Error("Failed to fetch orders");
    }
};

// Custom Hook to fetch and manage orders
export const useOrders = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Wrap the async logic inside an immediately invoked function expression (IIFE)
        const loadOrders = async () => {
            try {
                const fetchedOrders = await fetchOrders();
                setOrders(fetchedOrders);
            } catch (error) {
                setError(`Failed to fetch orders: ${error}`);
            } finally {
                setLoading(false);
            }
        };

        loadOrders();
    }, []); // Empty array ensures this runs once when the component mounts

    return { orders, loading, error };
};
