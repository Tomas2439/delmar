import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows the site to be exported as pure static HTML for Vercel
  // Remove 'output: export' if you ever need server-side features
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
