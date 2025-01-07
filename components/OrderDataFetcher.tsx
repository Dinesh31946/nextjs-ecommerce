"use client"; // Ensures the file runs on the client side

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Import the sanity client
import { Order } from "@/app/(store)/orders/types";

// Define the async function to fetch orders from Sanity
// const fetchOrders = async (): Promise<Order[]> => {
//     const query = `*[_type == "order"]{
//         _id,
//         orderNumber,
//         orderDate,
//         status,
//         totalPrice,
//         products[]->{
//             product->{
//                 name,
//                 price
//             },
//             quantity
//         }
//     }`;

//     try {
//         const orders = await client.fetch(query);
//         return orders.map((order: any) => ({
//             id: order.orderNumber,
//             date: new Date(order.orderDate).toLocaleDateString(),
//             status: order.status as Order["status"],
//             total: order.totalPrice,
//             items: order.products
//                 .filter((item: any) => item.product) // Filter out items with missing product references
//                 .map((item: any) => ({
//                     name: item.product ? item.product.name : "Unknown Product", // Safe check
//                     quantity: item.quantity,
//                     price: item.product ? item.product.price : 0, // Safe check
//                 })),
//         }));
//     } catch (error) {
//         console.error("Error fetching orders:", error);
//         throw new Error("Failed to fetch orders");
//     }
// };

const fetchOrders = async (): Promise<Order[]> => {
    const query = `*[_type == "order"]{
        _id,
        orderNumber,
        orderDate,
        status,
        totalPrice,
        products[]->{
            product->{
                name,
                price
            },
            quantity
        }
    }`;

    try {
        const orders = await client.fetch(query);

        // Safeguard: Ensure the 'product' exists before trying to access it
        return orders.map((order: any) => ({
            id: order.orderNumber,
            date: new Date(order.orderDate).toLocaleDateString(),
            status: order.status as Order["status"],
            total: order.totalPrice,
            items: order.products
                .map((item: any) => {
                    // Safeguard against null or undefined product
                    const product = item.product || null;
                    return {
                        product,
                        quantity: item.quantity,
                    };
                })
                .filter(
                    (item: any) =>
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
        const loadOrders = async () => {
            try {
                const fetchedOrders = await fetchOrders();
                setOrders(fetchedOrders);
            } catch (error) {
                setError("Failed to fetch orders");
            } finally {
                setLoading(false);
            }
        };

        loadOrders();
    }, []); // Empty array ensures this runs once when the component mounts

    return { orders, loading, error };
};
