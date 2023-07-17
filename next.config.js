/** @type {import('next').NextConfig} */
const nextConfig = {
  source: '/(.*)',
  headers: [
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin',
    },
  ],
  images: {
    domains: [
      'external-preview.redd.it',
      'preview.redd.it',
      'a.thumbs.redditmedia.com',
      'thumbs.redditmedia.com',
      'b.thumbs.redditmedia.com',
    ],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**external-preview.redd.it',
        hostname: '**thumbs.redditmedia.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
