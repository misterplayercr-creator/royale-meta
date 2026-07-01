/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cr-api.github.io',
      },
    ],
  },
}

module.exports = nextConfig
