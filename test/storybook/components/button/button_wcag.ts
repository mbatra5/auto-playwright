import { expect, Page } from '@playwright/test';
import { Given, When, Then, Before } from '../../../../config/fixture';
import { getBaseUrl } from '../../../../utils/env-util';
import Button from './button-pageobject';
import { AxeTest } from '../../../../config/axe-config';
const pageUrl = JSON.parse(JSON.stringify(require('../button/button.json')));

let button: Button;
let axeTestInstance: AxeTest;


Before(async function () {
button = new Button(this.page);
axeTestInstance = new AxeTest(this.page);
});

Given('I am on the {string} page for wcag', async function (pageId: string) {
await this.page.goto(getBaseUrl() + pageUrl[pageId]);
});

When('I allow cookie and check for violations', async function () { 
 const results1 = await axeTestInstance.checkAAGuidelinesOnElement(button.cookiesAllowLocator) 
 await button.cookiesAllowButton.click();

const results = await axeTestInstance.checkAAAGuidelines(); 
expect(results.violations).toHaveLength(1); //Assert the no. of violations
//expect(results.violations).toEqual([]);
});