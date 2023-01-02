const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  publicExcludes: ['!assets/**/*'],
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['via.placeholder.com', 'lh3.googleusercontent.com'],
  },
});
