import {devices, PlaywrightTestConfig} from '@playwright/test';
// @ts-ignore
import defaultConfig from './default_config';

const baseURL: string = process.env.ENVIRONMENT ?? defaultConfig.environment;
const headless: boolean = process.env.HEADLESS ?? defaultConfig.headless;

const config: PlaywrightTestConfig = {
    testDir: '../tests',
    use: {
        baseURL,
        headless
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },

        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
        },

        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        },

        {
            name: 'Microsoft Edge',
            use: {...devices['Desktop Edge'], channel: 'msedge'},
        }
    ],
};

// noinspection JSUnusedGlobalSymbols
export default config;
