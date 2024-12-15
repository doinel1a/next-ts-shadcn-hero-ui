import type { NextConfig } from 'next';

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  }
} satisfies NextConfig;

export default nextConfig;
