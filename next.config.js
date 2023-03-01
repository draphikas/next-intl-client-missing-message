const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
  experimental: {
    appDir: true,
  },
});

module.exports = nextConfig;
