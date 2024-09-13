import { createClient } from "@sanity/client";
import sanityImage from "@sanity/image-url";
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
});

const imageBuilder = sanityImage(sanityClient);
export function urlFor(image: any) {
  const getImageUrl = imageBuilder.image(image).url();
  return getImageUrl;
}
