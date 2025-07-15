import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   output:"export",
//   trailingSlash: true,
//   // images:{
   
//   // },
//   images: { unoptimized: true } 
// };

// export default nextConfig;


const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withBundleAnalyzer({
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
});

export default nextConfig;

