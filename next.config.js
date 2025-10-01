// next.config.js
const withTM = require('next-transpile-modules')([
  '@sanity/client',
  '@sanity/visual-editing',
]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  images: {
    domains: ['cdn.sanity.io'],
  },
  experimental: { appDir: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  turbo: false, // disable Turbopack
});

module.exports = nextConfig;
