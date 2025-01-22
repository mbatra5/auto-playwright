import { expect } from '@playwright/test';
import { Given, When, Then, Before } from '../../../../config/fixture'
import { getBaseUrl } from '../../../../utils/env-util'
import Button from './button-pageobject';
const pageUrl = JSON.parse(JSON.stringify(require('../button/button.json')))

let button: Button

Before(async function () {
  button = new Button(this.page)
})

Given('I am on the {string} page', async function (pageId: string) {

  await this.page.goto(getBaseUrl() + pageUrl[pageId])
});

When('I allow cookie', async function () {

  await button.cookiesAllowButton.click()


});

