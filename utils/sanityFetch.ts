export async function sanityFetch<T>({ query }: { query: string }): Promise<T> {
    const response = await fetch("https://your-sanity-api-endpoint", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`, // Replace with your environment variable
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result as T; // Assuming `result` is the correct key for the response
}
