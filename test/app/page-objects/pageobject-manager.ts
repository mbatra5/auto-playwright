import { Page } from '@playwright/test';
import HomePage from './homepage';
//import LoginPage from '../pages/loginpage';

class PageObjectManager {
  page: Page;
  homePage: HomePage;
  //   public loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(page);
    // this.loginPage = new LoginPage(page);
  }

}

export default PageObjectManager;