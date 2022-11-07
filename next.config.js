/** @type {import('next').NextConfig} */
const Dotenv = require('dotenv-webpack')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.plugins.push(new Dotenv({ silent: true }))
    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://openapi.naver.com/:path*'
      },
    ];
  }
}

module.exports = nextConfig
