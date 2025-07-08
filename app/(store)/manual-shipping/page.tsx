"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, RedirectToSignIn } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Image from "next/image";
import useBasketStore from "../store";
import { imageUrl } from "@/lib/imageUrl";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
    projectId: "kl91j914",
    dataset: "production",
    token: "skWLEFFIxKAlYzsPRNFpCyC2V3SABb5nFhJlwTvEfLMSeAyDJntOY7YtE4iYA7QWbL1NOvpjvHuc8WiiPvlAjKpYVtLlmguA2CYDHE2hUYm0CzbVbzj1zkobZUWZSTNyGgDSNPoc8KC0sPLNG2b6KPtaKmTMYNiQYR0Uciqy4Zt1msXgwOOb",
    apiVersion: "2023-01-01",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  transactionId: string;
}

interface PaymentInfo {
  upiId: string;
  bank: string;
  account: string;
  qrCodeUrl: string;
}

export default function ShippingPage() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useAuth();

  const groupedItems = useBasketStore((state) => state.getGroupedItems());
  const totalAmount = useBasketStore.getState().getTotalPrice();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    transactionId: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      alert("Please log in to access the shipping page.");
    }
  }, [isLoaded, isSignedIn]);

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      const data = await client.fetch(
        `*[_type == "paymentInfo"][0]{
          upiId,
          bank,
          account,
          qrCode{asset->{url}}
        }`
      );

      setPaymentInfo({
        upiId: data.upiId,
        bank: data.bank,
        account: data.account,
        qrCodeUrl: builder.image(data.qrCode).url(),
      });
    };

    fetchPaymentInfo();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      const data = await client.fetch(
        `*[_type == "paymentInfo"][0]{
          upiId,
          bank,
          account,
          qrCode{asset->{url}}
        }`
      );

      setPaymentInfo({
        upiId: data.upiId,
        bank: data.bank,
        account: data.account,
        qrCodeUrl: builder.image(data.qrCode).url(),
      });
    };

    fetchPaymentInfo();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  const handleConfirmPayment = async () => {
    if (!formData.transactionId.trim()) {
      alert("Please enter a valid transaction ID.");
      return;
    }

    const products = groupedItems.map((item) => ({
      _key: crypto.randomUUID(),
      productId: {
        _type: "reference",
        _ref: item.product._id,
      },
      quantity: item.quantity,
      price: item.product.mop ?? 0,
    }));

    const transactionId = formData.transactionId.trim();
    const orderNumber = `OI-${Date.now()}`;

    try {
      await client.create({
        _type: "order",
        orderNumber: orderNumber,
        transactionId: transactionId,
        customerName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        products,
        totalPrice: parseFloat(totalAmount.toFixed(2)),
        currency: "INR",
        status: "pending",
        orderDate: new Date().toISOString(),
      });

      router.push(`/success?orderNumber=${transactionId}`);
    } catch (error) {
      console.error("Error saving order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  if (!isLoaded) return <p>Loading...</p>;
  if (!isSignedIn) return <RedirectToSignIn />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Shipping Form */}
        <motion.div className="order-2 lg:order-1">
          <div className="bg-white border p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "fullName", label: "Full Name" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone Number" },
                { name: "address", label: "Address", type: "textarea" },
                { name: "city", label: "City" },
                { name: "state", label: "State" },
                { name: "pincode", label: "Pincode" },
              ].map(({ name, label, type = "text" }) => (
                <div key={name}>
                  <label htmlFor={name} className="block text-sm font-medium">
                    {label}
                  </label>
                  {type === "textarea" ? (
                    <textarea
                      id={name}
                      name={name}
                      required
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 border rounded-md"
                      disabled={isFormSubmitted}
                    />
                  ) : (
                    <input
                      type={type}
                      id={name}
                      name={name}
                      required
                      value={(formData as any)[name]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      disabled={isFormSubmitted}
                    />
                  )}
                </div>
              ))}

              {!isFormSubmitted && (
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md"
                >
                  Continue to Payment
                </button>
              )}
            </form>

            {/* Manual Payment Block */}
            {/* {isFormSubmitted && (
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Manual Payment</h3>
                <Image
                  src="/qr-code.png"
                  alt="QR Code"
                  width={200}
                  height={200}
                />
                <p><strong>UPI ID:</strong> yourupi@bank</p>
                <p><strong>Bank:</strong> Axis Bank</p>
                <p><strong>Account:</strong> 123456789</p>

                <label htmlFor="transactionId" className="block text-sm font-medium">
                  Transaction ID
                </label>
                <input
                  id="transactionId"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your transaction ID"
                />

                <button
                  onClick={handleConfirmPayment}
                  disabled={!formData.transactionId.trim()}
                  className="w-full bg-green-500 text-white py-2 rounded-md disabled:opacity-50"
                >
                  Confirm Payment
                </button>
              </div>
            )} */}
            {isFormSubmitted && paymentInfo && (
                <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-semibold">Manual Payment</h3>
                    <Image
                    src={paymentInfo.qrCodeUrl}
                    alt="QR Code"
                    width={200}
                    height={200}
                    />
                    <p><strong>UPI ID:</strong> {paymentInfo.upiId}</p>
                    <p><strong>Bank:</strong> {paymentInfo.bank}</p>
                    <p><strong>Account:</strong> {paymentInfo.account}</p>

                    <label htmlFor="transactionId" className="block text-sm font-medium">
                    Transaction ID
                    </label>
                    <input
                    id="transactionId"
                    name="transactionId"
                    value={formData.transactionId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Enter your transaction ID"
                    />

                    <button
                    onClick={handleConfirmPayment}
                    disabled={!formData.transactionId.trim()}
                    className="w-full bg-green-500 text-white py-2 rounded-md disabled:opacity-50"
                    >
                    Confirm Payment
                    </button>
                </div>
            )}
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div className="order-1 lg:order-2">
          <div className="bg-white border p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4">
              {groupedItems.map((item) => (
                <div key={item.product._id} className="flex gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={
                        item.product.images?.[0]
                          ? imageUrl(item.product.images[0]).url()
                          : "/placeholder.svg"
                      }
                      alt={item.product.name || "Product Image"}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="ml-auto font-semibold">
                    ₹{((item.product.mop ?? 0) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="border-t pt-4 text-lg font-bold flex justify-between">
                <span>Total:</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
