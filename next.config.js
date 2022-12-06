const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
const nextConfig = withPWA({
  images: {
    domains: ["img.shields.io"],
  },
});

module.exports = nextConfig;
