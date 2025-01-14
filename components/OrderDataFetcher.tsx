"use client"; // Ensures the file runs on the client side

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Import the sanity client
import { Order } from "@/app/(store)/orders/types";

// Define types for the fetched data
interface Product {
    name: string;
    price: number; // Represent price as price, not MRP
}

interface ProductItem {
    product: Product | null;
    quantity: number;
    price: number;
}

interface SanityOrder {
    orderNumber: string;
    orderDate: string;
    status: string;
    totalPrice: number;
    products: {
        product: Product | null;
        quantity: number;
        price: number;
    }[];
}

// Define the async function to fetch orders from Sanity
// const fetchOrders = async (): Promise<Order[]> => {
//     const query = `*[_type == "order"]{
//             _id,
//             orderNumber,
//             orderDate,
//             status,
//             totalPrice,
//             products[] {
//                 product->{
//                     name,
//                     mop
//                 },
//                 quantity,
//                 price
//             }
//         }`;

//     try {
//         const orders: SanityOrder[] = await client.fetch(query); // Type the fetched data

//         return orders.map((order) => ({
//             id: order.orderNumber,
//             date: new Date(order.orderDate).toLocaleDateString(),
//             status: order.status as Order["status"],
//             total: order.totalPrice,
//             items: order.products
//                 .map((item) => {
//                     const product = item.product || null;
//                     return {
//                         product,
//                         quantity: item.quantity,
//                         price: item.price, // Include the price here
//                     };
//                 })
//                 .filter(
//                     (item) =>
//                         item.product !== null && item.product !== undefined
//                 ),
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
        products[] {
            productId->{
                name,
                price
            },
            quantity,
            price
        }
    }`;

    try {
        const orders: SanityOrder[] = await client.fetch(query); // Type the fetched data

        return orders.map((order) => ({
            id: order.orderNumber,
            date: new Date(order.orderDate).toLocaleDateString(),
            status: order.status as Order["status"],
            total: order.totalPrice,
            items: order.products
                .map((item) => {
                    const product = item.product || null;
                    return {
                        product,
                        quantity: item.quantity,
                        price: item.price, // Include price here as well
                    };
                })
                .filter(
                    (item) =>
                        item.product !== null && item.product !== undefined
                ),
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
                setError(`Failed to fetch orders: ${error}`);
            } finally {
                setLoading(false);
            }
        };

        loadOrders();
    }, []); // Empty array ensures this runs once when the component mounts

    return { orders, loading, error };
};
