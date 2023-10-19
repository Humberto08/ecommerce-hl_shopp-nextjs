/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unplash.com"}
    ],
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig


