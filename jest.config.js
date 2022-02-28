const config = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,ts}',
    '!src/**/*.test.*',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/index.js',
    '!**/*.stories.*'
  ],
  coverageThreshold: {
    global: {
      lines: 75
    }
  }
}

module.exports = config
