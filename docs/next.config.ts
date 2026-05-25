import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for pages without dynamic data
  // output: 'export', // Uncomment if you want full static export (removes API routes)
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Trailing slashes for better static export compatibility
  trailingSlash: true,
};

export default nextConfig;
