import { Locator, Page } from "@playwright/test";


class Button {
    page: Page;
    cookiesAllowButton: Locator;
    searchIcon: Locator;
    searchTextField: Locator;
  
    cookiesAllowLocator=".nr-cookie-notification .nr-cookie-accept.nr-btn-primary"
    
    constructor (page: Page){
      this.page = page;
      this.cookiesAllowButton=page.locator(this.cookiesAllowLocator)
      this.searchIcon=page.locator(".nr-header__search button.nr-header__search-btn")
      this.searchTextField=page.locator("#q[type='text']")
     // this.cookiesAllowLocator=".nr-cookie-notification .nr-cookie-accept.nr-btn-primary"
    }
  }
    export default Button;