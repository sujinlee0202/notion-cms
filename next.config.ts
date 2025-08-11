import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  staticPageGenerationTimeout: 120,
  /* config options here */
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
