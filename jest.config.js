/* eslint-disable */
module.exports = {
  displayName: 'prime-react-lib',
  preset: './jest.preset.js',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      { tsconfig: '<rootDir>/tsconfig.spec.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['<rootDir>/src/utils-test/setupTest.ts']
};
