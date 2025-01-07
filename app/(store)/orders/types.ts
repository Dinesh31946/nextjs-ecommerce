// Adjust the Order interface to reflect the correct shape of items
export interface Order {
    id: string;
    date: string;
    status: "pending" | "shipped" | "delivered";
    total: number;
    items: {
        product: {
            name: string;
            price: number;
        } | null; // This allows for null if the product is not available
        quantity: number;
    }[]; // Array of products with quantity
}
