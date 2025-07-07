import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // If your repo is not at the root domain, set the basePath and assetPrefix:
  basePath: '/portfolio-site',
  assetPrefix: '/portfolio-site/',
};

export default nextConfig;
