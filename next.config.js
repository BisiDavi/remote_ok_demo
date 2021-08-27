const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
  withPWA({
    images: {
      domains: ["remoteok.io"],
    },
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      runtimeCaching,
    },
    poweredByHeader: false,
  })
);
