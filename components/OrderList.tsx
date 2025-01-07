import { Order } from "@/app/(store)/orders/types";

interface OrderListProps {
    orders: Order[];
}

const OrderList = ({ orders }: OrderListProps) => {
    return (
        <div>
            {orders.length === 0 ? (
                <p>No orders found</p>
            ) : (
                orders.map((order) => (
                    <div key={order.id} className="order">
                        <h3>Order ID: {order.id}</h3>
                        <p>Date: {order.date}</p>
                        <p>Status: {order.status}</p>
                        <p>Total: ${order.total}</p>
                        <ul>
                            {order.items.map((item, index) => {
                                // Ensure the product exists before accessing its properties
                                const productName = item.product
                                    ? item.product.name
                                    : "Unknown Product";
                                const productPrice = item.product
                                    ? item.product.price
                                    : 0;

                                return (
                                    <div
                                        key={index}
                                        className="flex justify-between"
                                    >
                                        <span>
                                            {productName} (x{item.quantity})
                                        </span>
                                        <span>
                                            $
                                            {(
                                                productPrice * item.quantity
                                            ).toFixed(2)}
                                        </span>
                                    </div>
                                );
                            })}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
};

export default OrderList;
