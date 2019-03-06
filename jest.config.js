module.exports = {
  preset: 'jest-preset-angular',
  roots: [
    './src/app'
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/src/setup-jest.ts',
    '!**/src/**/index.ts',
    '!**/src/**/*.module.ts'
  ],
  coverageReporters: [
    'json',
    'lcov',
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      statements: 59,
      branches: 45,
      functions: 54,
      lines: 58
    }
  },
  setupFiles: ['jest-canvas-mock'],
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-jest.ts'
};
