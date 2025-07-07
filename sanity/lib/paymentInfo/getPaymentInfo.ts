import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "kl91j914",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
});

export async function getPaymentInfoClientSide() {
  try {
    const result = await client.fetch(
      `*[_type == "paymentInfo"][0]{
        accountHolderName,
        bankAccountNumber,
        ifscCode,
        upiId,
        "qrUrl": qrImage.asset->url
      }`
    );

    return result;
  } catch (error) {
    console.error("Failed to fetch payment info:", error);
    return null;
  }
}
