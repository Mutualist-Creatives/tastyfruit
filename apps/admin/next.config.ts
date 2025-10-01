import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix monorepo build issues
  outputFileTracingRoot: require("path").join(__dirname, "../.."),

  // Optimize for production
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"],
  },

  // Handle static assets
  assetPrefix: process.env.NODE_ENV === "production" ? undefined : undefined,
};

export default nextConfig;
