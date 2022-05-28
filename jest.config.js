module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  setupFiles: ['dotenv/config', './jest.setup.js'],
  modulePathIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^pages/(.*)$': '<rootDir>/pages//$1',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/__tests__/**/*.test.js'],
  testTimeout: 15000,
}
