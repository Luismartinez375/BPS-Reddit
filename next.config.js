/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['preview.redd.it'],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'preview.redd.it',
            port: '',
          },
        ],
      },
    }


module.exports = nextConfig;
