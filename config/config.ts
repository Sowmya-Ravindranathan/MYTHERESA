import {PlaywrightTestConfig} from '@playwright/test';
// @ts-ignore
import defaultConfig from './default_config';

export const baseURL: string = process.env.ENVIRONMENT ?? defaultConfig.environment;
const browserName = process.env.BROWSER ?? defaultConfig.browser;
const headless = process.env.HEADLESS ?? defaultConfig.headless;

const config: PlaywrightTestConfig = {
    testDir: '../tests',
    reporter: 'html',
    timeout: 120000,
    use: {
        baseURL,
        browserName,
        headless,
        screenshot: "only-on-failure",
        trace: "on"
    },
};

// noinspection JSUnusedGlobalSymbols
export default config;
