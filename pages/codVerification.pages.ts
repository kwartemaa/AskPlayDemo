import {Page, Browser , Locator} from "@playwright/test";

export class AppPage {
    readonly browser: Browser;
  
    constructor(browser: Browser, page: Page) {
      this.browser = browser;
      
    }
  
    async extractVerificationCode() {
      // Remove storage state to simplify the sample,
      // the main problem is with browser.newContext: Browser has been closed
      // const context = await this.browser.newContext({
      //   storageState: './auth.json',
      // });
      const context = await this.browser.newContext();
      const newTab = await context.newPage();
      await newTab.goto('https://receive-smss.com/sms/34658194198/');

    }
  }