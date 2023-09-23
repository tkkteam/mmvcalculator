/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co'],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'commumorning.firebaseapp.com',
      },
    ],
  },
}
module.exports = {
  experimental: {
    nextScriptWorkers: true,

  },
}
module.exports = nextConfig
