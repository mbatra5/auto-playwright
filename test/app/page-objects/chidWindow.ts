import { Locator, Page } from "@playwright/test";

class LegalPage {
  page: Page;
  legalheading: Locator;
  documentLink: Locator

  constructor(page: Page) {
    this.page = page;
    this.legalheading = page.locator(".nr-page-title__header--title");
    this.documentLink = page.locator("[href*='documents-request']")
  }
}
export default LegalPage;