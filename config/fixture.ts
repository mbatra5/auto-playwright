import { Page } from '@playwright/test';
import { test as base, createBdd } from 'playwright-bdd';
import dotenv from 'dotenv';
import {getBaseUrl } from '../utils/env-util'

type World = { page: Page};

export const test = base.extend<{ world: World }>({
  world: async ({ page }, use) => {
    await use({ page,});
  },
});

export const baseTest = base;
export const fixture = test;

export const { Given, When, Then, BeforeAll,Before, } = createBdd(test, { 
  worldFixture: 'world' 
});

BeforeAll(async function () {
  dotenv.config({ path: './config/env_config/env.env' });
  // console.log('ENV:', process.env.ENV)
  // console.log('Environment variables loaded:', process.env);
  // console.log('Running BeforeAll hook');
 
  const baseUrl = getBaseUrl();
//  console.log('Base URL for execution: ' + baseUrl);
  
});




