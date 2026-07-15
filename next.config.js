/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '192.168.0.200', // Your phone's IP
    'localhost',
    '127.0.0.1',
  ],
  reactStrictMode: true,
};

module.exports = nextConfig;