import { Locator, Page } from "@playwright/test";

class HomePage {
  page: Page;
  cookiesAllowButton: Locator;
  searchIcon: Locator;
  searchTextField: Locator
  legalLink: Locator;
  logoutButton: Locator;
  dashboardBanner: Locator;
  memberNumber: Locator;
  password: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookiesAllowButton = page.locator(".nr-cookie-notification .nr-cookie-accept.nr-btn-primary")
    this.searchIcon = page.locator(".nr-header__search button.nr-header__search-btn")
    this.searchTextField = page.locator("#q[type='text']")
    this.legalLink = page.getByText("Legal notice");
    this.logoutButton = page.locator("[class*='logoutBtn']");
    this.dashboardBanner = page.locator("[class='dashboard__Banner__ContentWrapper__aFG7w']");
    this.memberNumber = page.getByLabel('Member number')
    this.password = page.getByLabel('Password')
    this.loginButton = page.locator("[class='button button-primary']");
  }
}
export default HomePage;