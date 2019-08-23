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

module.exports = defaultConfig => {
  return withBundleAnalyzer(withOffline({ ...defaultConfig, ...customConfig }));
};
