import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ enables static export to /out
  images: {
    unoptimized: true, // ✅ required for static export
  },
  trailingSlash: true, // optional: helps Firebase handle routes better
};

export default nextConfig;
