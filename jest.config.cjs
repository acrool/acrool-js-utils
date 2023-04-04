module.exports = {
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/src/**/*.spec.[jt]s?(x)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    // setupFilesAfterEnv: ['./jest.setup.js']
};
