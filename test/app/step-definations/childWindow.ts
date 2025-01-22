import { expect, Page } from '@playwright/test';
import { Given, When, Then, Before } from '../../../config/fixture'
import HomePage from '../page-objects/homepage';
import LegalPage from '../page-objects/chidWindow';
import { waitForNewPage } from '../../../utils/generic-utils';

const pageUrl = JSON.parse(JSON.stringify(require('../test-data/pageUrl.json')))

let homePage: HomePage
let childwindow: LegalPage
let newPage: Page

//let suiteName: any
Before(async function ({world}) {
  homePage = new HomePage(world.page)
  childwindow = new LegalPage(world.page)

})

Given('I am on the home page', async function () {
  await this.page.goto(pageUrl.test);
  
});
When('I click document link', async function ({ page }) {
  newPage = await waitForNewPage(page.context(), async () => {
    await childwindow.documentLink.click(); // Trigger the click that opens the new page.
  });
});


Then('I should be on the new page', async function () {
  //allure.severity("blocker")
  await expect(newPage).toHaveURL(pageUrl.newURL)
  
})




