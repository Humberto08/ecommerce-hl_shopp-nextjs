/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unplash.com"},
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  
}

module.exports = nextConfig


