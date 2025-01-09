import type {Config} from 'jest';
import {defaults} from 'jest-config';

globalThis.ngJest = {
    skipNgcc: true,
    tsconfig: 'tsconfig.spec.json',
};

/** @type {import('@jest/types').Config.InitialOptions} */

const config: Config = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
    verbose: true,
    skipNgcc: true,
    tsconfig: 'tsconfig.spec.json',
    module.exports = {
        preset: 'jest-preset-angular',
        testEnvironment: 'jsdom',
        setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
        transform: {
            '^.+\\.ts$': 'ts-jest',
        },
        transformIgnorePatterns: [
            '/node_modules/(?!flat)/',
        ],
        moduleDirectories: ['node_modules', 'src'],
        fakeTimers: {
            enableGlobally: true,
        }
    };
  };

export default config;
