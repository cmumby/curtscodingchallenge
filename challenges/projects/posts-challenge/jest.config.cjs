// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  setupFiles: ['dotenv/config'],

  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '\\.css$': '<rootDir>/skip-css.cjs',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)+(test).ts?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
