import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maris Exclusive",
    short_name: "Maris",
    description:
      "Where Exceptional Acquisition Meets Finer Interiors. Luxury real estate, yachting & interior advisory.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F4",
    theme_color: "#9C8C78",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
