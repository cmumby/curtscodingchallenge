// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.css$': '<rootDir>/skip-css.cjs',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
