import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 11',
    build: 'lambda-test-trial',
    name: 'Google smoke test',
    user: process.env.LAMBDA_TEST_USER,
    accessKey: process.env.LAMBDA_TEST_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
  },
};

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify(capabilities),
      )}`,
    },
  },
});
