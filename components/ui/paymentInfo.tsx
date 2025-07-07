"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getPaymentInfoClientSide } from "@/sanity/lib/paymentInfo/getPaymentInfo"; 

// 🧠 Updated correct type
type PaymentInfo = {
  qrUrl?: string;
  accountHolderName: string;
  upiId: string;
  bankAccountNumber: string;
  ifscCode: string;
};

export default function PaymentInfoClient() {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const info = await getPaymentInfoClientSide();
      setPaymentInfo(info);
    };

    fetchData();
  }, []);

  if (!paymentInfo) {
    return <p className="text-center text-gray-500">Loading payment info...</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-semibold text-center mb-4">
        Make Payment to Below Details
      </h2>

      {/* QR Code */}
      {paymentInfo.qrUrl && (
        <Image
          src={paymentInfo.qrUrl}
          alt="QR Code"
          width={200}
          height={200}
          className="mx-auto mb-4"
        />
      )}

      <div className="text-sm text-center text-gray-700 space-y-1">
        <p><strong>Account Holder:</strong> {paymentInfo.accountHolderName}</p>
        <p><strong>UPI ID:</strong> {paymentInfo.upiId}</p>
        <p><strong>Account Number:</strong> {paymentInfo.bankAccountNumber}</p>
        <p><strong>IFSC Code:</strong> {paymentInfo.ifscCode}</p>
      </div>
    </div>
  );
}