/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    // unoptimized: true,
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
