import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "^database/(.*)$": "<rootDir>/src/database/$1",
    "^api/(.*)$": "<rootDir>/src/api/$1",
  },
};

export default config;
