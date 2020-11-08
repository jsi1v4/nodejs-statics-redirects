module.exports = {
  globals: {
    tsJest: {
      tsConfigFile: 'tsconfig.json'
    }
  },
  testMatch: [
    '**/*.test.+(ts|js)'
  ],
  preset: 'ts-jest'
}
