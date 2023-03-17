import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "5ms9hukg",
  dataset: "production",
  apiVersion: "2023-03-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
