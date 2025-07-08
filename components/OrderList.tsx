import { Order } from "@/app/(store)/orders/types";

interface OrderListProps {
    orders: Order[];
}

const OrderList = ({ orders }: OrderListProps) => {
    // Function to determine status color
    const getStatusClass = (status: string) => {
        switch (status) {
            case "pending":
                return "bg-yellow-500 text-white";
            case "paid":
                return "bg-green-500 text-white";
            case "shipped":
                return "bg-blue-500 text-white";
            case "delivered":
                return "bg-gray-500 text-white";
            case "cancelled":
                return "bg-red-500 text-white";
            default:
                return "bg-gray-300 text-black";
        }
    };

    return (
        <div className="space-y-4">
            {orders.length === 0 ? (
                <p>No orders found</p>
            ) : (
                orders.map((order) => (
                    <div
                        key={order.id}
                        className="p-4 border rounded-lg shadow-md bg-white"
                    >
                        <h3 className="text-xl font-semibold">
                            Order ID: {order.id}
                        </h3>
                        <p className="text-sm text-gray-500">
                            Date: {order.date}
                        </p>

                        <div className="my-2">
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}
                            >
                                {order.status.charAt(0).toUpperCase() +
                                    order.status.slice(1)}
                            </span>
                        </div>

                        <p className="font-semibold">Total: ${order.total}</p>

                        <div className="space-y-4 mt-4">
                            {/* Loop through each product in the order */}
                            {order.items.map((item, index) => {
                                // Ensure product details are available
                                const productName =
                                    item.product?.name || "Unknown Product";
                                const productPrice = item.product?.price || 0;

                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center border-b py-2"
                                    >
                                        <div className="flex flex-col">
                                            <span className="font-semibold">
                                                {productName}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                Quantity: {item.quantity}
                                            </span>
                                        </div>
                                        <span className="font-semibold">
                                            $
                                            {(
                                                productPrice * item.quantity
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderList;
