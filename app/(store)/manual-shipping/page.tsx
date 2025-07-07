"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, RedirectToSignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Image from "next/image";
import useBasketStore from "../store";
import { imageUrl } from "@/lib/imageUrl";
import { createClient } from "@sanity/client";
import PaymentInfoClient from "@/components/ui/paymentInfo";

const client = createClient({
    projectId: "kl91j914",
    dataset: "production",
    token: "skWLEFFIxKAlYzsPRNFpCyC2V3SABb5nFhJlwTvEfLMSeAyDJntOY7YtE4iYA7QWbL1NOvpjvHuc8WiiPvlAjKpYVtLlmguA2CYDHE2hUYm0CzbVbzj1zkobZUWZSTNyGgDSNPoc8KC0sPLNG2b6KPtaKmTMYNiQYR0Uciqy4Zt1msXgwOOb",
    apiVersion: "2023-01-01",
    useCdn: false,
});

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export default function ManualShippingPage() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();
  const groupedItems = useBasketStore((s) => s.getGroupedItems());
  const totalAmount = useBasketStore.getState().getTotalPrice();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      alert("Please log in to access the shipping page.");
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) return <p>Loading...</p>;
  if (!isSignedIn) return <RedirectToSignIn />;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  const handleSaveOrder = async () => {
    if (!transactionId.trim()) {
      alert("Please enter the transaction ID");
      return;
    }

    // build the products array exactly as in your schema
    const products = groupedItems.map((item) => {
      const refId =
        item.product._id ||        // if you fetched the full document
        (item.product as any)._ref || // if it's already a reference object
        (item.product as any).id;     // or another field

      if (!refId) {
        console.error("❌ Missing product ID on item:", item);
      }

      return {
        _key: crypto.randomUUID(),
        productId: {
          _type: "reference",
          _ref: refId,
        },
        quantity: item.quantity,
        price: item.product.mop ?? 0,
      };
    });

    const orderNumber = `OID-${Date.now()}`;

    try {
      const order = await client.create({
        _type: "order",
        orderNumber,
        paypalTransactionId: transactionId,       // user-entered ID
        customerName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        products,
        totalPrice: totalAmount,
        currency: "INR",                           // or "USD" as you prefer
        status: "pending",                         // initial status
        orderDate: new Date().toISOString(),
      });

      console.log("Order saved:", order);
      router.push(`/success?orderNumber=${orderNumber}`);
    } catch (err) {
      console.error("Error saving manual payment order:", err);
      alert("Failed to save order.");
    }
  };

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Shipping Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-2xl font-semibold mb-6">Shipping Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {(
                [
                  "fullName",
                  "email",
                  "phone",
                  "address",
                  "city",
                  "state",
                  "pincode",
                ] as const
              ).map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-1 capitalize"
                  >
                    {field === "pincode"
                      ? "Pin Code"
                      : field.replace(/([A-Z])/g, " $1")}
                  </label>
                  {field === "address" ? (
                    <textarea
                      id={field}
                      name={field}
                      rows={3}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      disabled={isFormSubmitted}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border rounded-md"
                      disabled={isFormSubmitted}
                    />
                  )}
                </div>
              ))}
              {!isFormSubmitted && (
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#86d7ff] to-blue-400 text-white font-bold py-2 rounded-md"
                >
                  Continue to Payment
                </button>
              )}
            </form>
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span>Items:</span>
                <span>
                  {groupedItems.reduce((sum, it) => sum + it.quantity, 0)}
                </span>
              </div>
              <div className="space-y-4">
                {groupedItems.map((item) => (
                  <div key={item.product._id} className="flex gap-4 items-center">
                    <div className="h-16 w-16 bg-gray-100 rounded-md overflow-hidden relative">
                      <Image
                        src={
                          item.product.images
                            ? imageUrl(item.product.images[0]).url()
                            : "/placeholder.svg"
                        }
                        alt={item.product.name ?? "Product image"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="font-medium">
                      Rs{" "}
                      {item.product.mop
                        ? (item.product.mop * item.quantity).toFixed(2)
                        : "0.00"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span>Rs {totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Manual Payment Section */}
      {isFormSubmitted && (
        <div className="mt-10 bg-white border rounded-lg p-6">
          <PaymentInfoClient />
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">
              Enter Transaction ID
            </label>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="e.g. TXN12345678"
            />
          </div>
          <button
            onClick={handleSaveOrder}
            className="w-full mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-2 rounded-md"
          >
            Confirm Payment
          </button>
        </div>
      )}
    </div>
  );
}
