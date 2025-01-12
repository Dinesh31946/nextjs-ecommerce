import { client } from "@/sanity/lib/client";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = ImageUrlBuilder(client);

export function imageUrl(source: SanityImageSource) {
    return builder.image(source);
}

// import { client } from "@/sanity/lib/client";
// import imageUrlBuilder from "@sanity/image-url";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// // Initialize the image URL builder
// const builder = imageUrlBuilder(client);

// // Function to generate image URLs
// export function imageUrl(source: SanityImageSource | undefined): string {
//     if (!source) {
//         // Return a fallback image URL or an empty string
//         return "/fallback-image.jpg";
//     }
//     const url = builder.image(source)?.url();
//     return url || "/fallback-image.jpg"; // Ensure a fallback is returned if URL generation fails
// }
