module.exports = {
    preset: "react-native",
    moduleFileExtensions: ['js', 'json', 'node'],
    testMatch: [
        "**/__tests__/**/*.+(js)",
        "**/?(*.)+(spec|test).+(js)",
    ],
    transform: {
        "\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    globals: { 
        __DEV__: true
    },
    setupFilesAfterEnv: ['./test-setup.js', '@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: ["node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-circular-progress)/)"],
};