const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withOffline = require("next-offline");

const customConfig = {
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
};

const offlineConfig = {
  transformManifest: (manifest) => ["/"].concat(manifest),
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*static.*/,
        handler: "CacheFirst",
        options: {
          cacheName: "static",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60,
            purgeOnQuotaError: true,
          },
        },
      },
      {
        urlPattern: /^https?.*fonts.*/,
        handler: "CacheFirst",
        options: {
          cacheName: "fonts",
          expiration: {
            maxEntries: 15,
            maxAgeSeconds: 60 * 60,
            purgeOnQuotaError: true,
          },
        },
      },
    ],
  },
};

const i18nConfig = {
  i18n: {
    locales: ["en-US", "pl"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
};

const rewritesConfig = {
  async rewrites() {
    return [
      {
        source: "/resources",
        destination: "/materialy",
      },
    ];
  },
};

module.exports = (defaultConfig) => {
  return withBundleAnalyzer(
    withOffline({
      ...defaultConfig,
      ...customConfig,
      ...offlineConfig,
      ...i18nConfig,
      ...rewritesConfig,
    })
  );
};
