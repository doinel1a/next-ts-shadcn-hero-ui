/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
import './src/env.ts';

import type { NextConfig } from 'next';

const nextConfig = {
  reactStrictMode: true
} satisfies NextConfig;

export default nextConfig;
