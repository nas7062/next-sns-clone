import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "avatars.githubusercontent.com",
      "cdn.jsdelivr.net",
    ],
  },
};

export default nextConfig;
