/** @type {import('next').NextConfig} */
require('dotenv').config()
const webpack = require('webpack')

const nextConfig = {
  images: {
    domains: [
      "primefaces.org",
      "edbrix.com",
      "pdprogramservices.edbrix.com"
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**.edbrix.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://pdprogramservices.edbrix.com',
      },
    ]
  },

  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
}
module.exports = nextConfig


