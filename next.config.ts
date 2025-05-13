
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures routes like /about become /about/ for GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Required for static export if using next/image
    remotePatterns: [
      // picsum.photos removed as it's no longer used for project images
    ],
  },
};

export default nextConfig;
