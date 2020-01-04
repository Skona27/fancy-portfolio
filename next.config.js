const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const withOffline = require("next-offline");

const customConfig = {
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  }
};

const offlineConfig = {
  transformManifest: manifest => ["/"].concat(manifest),
  workboxOpts: {
    globPatterns: ["static/**/*"],
    globDirectory: ".",
    runtimeCaching: [
      {
        urlPattern: /^https?.*fonts.*/,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts",
          expiration: {
            maxEntries: 15,
            maxAgeSeconds: 24 * 60 * 60 * 30,
            purgeOnQuotaError: true
          }
        }
      },
      {
        urlPattern: /^https?.*firestore.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "google-firestore",
          networkTimeoutSeconds: 5,
          expiration: {
            maxEntries: 20,
            maxAgeSeconds: 24 * 60 * 60,
            purgeOnQuotaError: true
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = defaultConfig => {
  return withBundleAnalyzer(
    withOffline({ ...defaultConfig, ...customConfig, ...offlineConfig })
  );
};
