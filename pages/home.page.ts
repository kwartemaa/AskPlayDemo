import {Locator, Page } from '@playwright/test';


export class ZebHomePage {
  readonly page: Page;
  readonly searchBtn: Locator;
  readonly searchField: Locator;
  readonly closeSearch: Locator;
  readonly logo: Locator;
  readonly langSwitchDesk: Locator;
  readonly optionFrench: Locator;
  readonly optionEnglish: Locator;
  readonly optionFrenchMob: Locator;
  readonly optionEnglishMob: Locator;
  readonly burgarMenuMob: Locator;
  readonly startSearch: Locator



  constructor(page: Page) {
    this.page = page;
    this.searchBtn = page.locator('button[class="zb-underline-on-hover mx-4 v-btn v-btn--plain theme--light v-size--default"]');
    this.searchField = page.locator('input[id="input-23"]');
    this.closeSearch = page.locator('//button[@class="ml-3 my-auto mr-1 v-btn v-btn--icon v-btn--plain v-btn--round theme--light v-size--default"]');    
    this.logo = page.getByAltText("logo");
    this.langSwitchDesk = page.locator('//div[@class="zb-lang-switcher d-none d-xs-none d-sm-inline-flex pr-8"]');
    this.optionFrench = page.getByText('Francais');
    this.optionEnglish = page.getByText('English');
    this.burgarMenuMob = page.locator('button[class="zb-underline-on-hover mx-6 v-btn v-btn--plain theme--light v-size--default"]');
    this.optionFrenchMob = page.getByText('Français'),
    this.optionEnglishMob = page.getByText('English')
    this.startSearch = page.getByText("Suche Starten")
    }

  async typeInHeaderSearch(searchTerm: string){
    await this.searchBtn.click({force:true})
    await this.searchField.type(searchTerm)
     await this.page.keyboard.press('Enter')
    //await this.startSearch.click({force:true})
}  

async closeSearchField(){
  await this.closeSearch.click({force:true})
}  

async clickOnLogo(){
  await this.logo.click({force:true})
}

  // switchLanguageDesktop(locale: string){
  //       this.langSwitchDesk.click()
  //       if(locale=="fr"){
  //           this.langSwitchDesk.click()
  //           this.optionFrench.click()
  //       }else if(locale=="en"){
  //           this.langSwitchDesk.click()
  //           this.optionEnglish.click()
  //       }
  //   }  

  //   switchLanguageMobile(locale: string){
  //       this.burgarMenuMob.click()
  //       if(locale=="fr"){
  //           this.optionFrenchMob.click()
  //       }else if(locale=="en"){
  //           this.optionEnglishMob.click()
  //       }
  //   }
}