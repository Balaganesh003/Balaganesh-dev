/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
    hostname: 'cdn.sanity.io',
  },
};

module.exports = nextConfig;
