module.exports = {
    coverageDirectory: "coverage",
    preset: 'ts-jest',
    testEnvironment: "node",
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.test.json"
        }
    }
};
