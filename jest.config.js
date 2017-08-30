module.exports = {
  "setupTestFrameworkScriptFile": "<rootDir>/jest.steup.js",
  "roots": ["<rootDir>/src"],
  "coverageDirectory": "<rootDir>/.coverage",
  "collectCoverageFrom": ["src/**/*.js"],
  "modulePathIgnorePatterns": ["\\.(css|scss)$"]
}