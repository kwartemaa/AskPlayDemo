import { test as base } from '@playwright/test';
import { HomePageForFixt } from '../../pages/homepageForFixt.page';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePageForFixt;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    homePage: async ({ page }, use) => {
    // Set up the fixture.
    const homePage = new HomePageForFixt(page);
    await use(homePage)
  },


});
export { expect } from '@playwright/test';