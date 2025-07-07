import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
  // No basePath or assetPrefix!
};

export default nextConfig;
