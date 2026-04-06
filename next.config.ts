import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/finlog',
  assetPrefix: '/finlog/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
