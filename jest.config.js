module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/*.tsx", "**/*.ts"],
  coverageReporters: ["lcov", "text-summary"],
  coverageDirectory: "./.coverage",
  coverageThreshold: {
    global: {
      branches: 0.1,
      functions: 0.1,
      lines: 0.1,
      statements: 0.1
    }
  }
};
