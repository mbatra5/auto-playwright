import { expect } from '@playwright/test';
import { Given, When, Then, Before } from '../../../config/fixture'
import { getBaseUrl } from '../../../utils/env-util'
import HomePage from '../page-objects/homepage';
import { setAllureMetadata } from '../../../utils/allure-util'
const pageUrl = JSON.parse(JSON.stringify(require('../test-data/pageUrl.json')))

let homePage: HomePage

Before(async function ({ world, $testInfo }) {

  homePage = new HomePage(world.page)
  await setAllureMetadata($testInfo);
})

Given('I am on the {string} page', async function (pageId: string) {
  console.log('urlis :' + getBaseUrl() + pageUrl[pageId])
  await this.page.goto(getBaseUrl() + pageUrl[pageId]);

});

When('I allow cookie', async function () {

  await homePage.cookiesAllowButton.click();
});

Then('Cookie modal should not display', async function () {
  await expect(homePage.cookiesAllowButton).not.toBeVisible()
})

When('I click on search icon', async function () {
  expect(await homePage.searchIcon.isVisible()).toBe(true);
  await homePage.searchIcon.click()
})

Then('I search {string}', async function (search: string) {
  await homePage.searchTextField.fill(search)
});


