import type {Locator, Page } from '@playwright/test';
import { defaultLanguages } from '../locale';
export class HomePageForFixt {
//   readonly page: Page;
  private readonly searchBtn: Locator;
  private readonly searchField: Locator;
  private readonly closeSearch: Locator;
  private readonly logo: Locator;
  private readonly langSwitchDesk: Locator;
  private readonly optionFrench: Locator;
  private readonly optionEnglish: Locator;
  private readonly optionFrenchMob: Locator;
  private readonly optionEnglishMob: Locator;
  private readonly burgarMenuMob: Locator;
  private readonly startSearchFrench: Locator;
  private readonly startSearchEnglish: Locator;
  private readonly startSearchGerman: Locator;



  constructor(public readonly page: Page) {
    // this.page = page;
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
    this.startSearchFrench = page.getByText("Lancer la recherche")
    this.startSearchEnglish = page.getByText("Start search")
    this.startSearchGerman = page.getByText("Suche starten")
    }

    // async typeInSearchField(){
    // 
    // }
//  async goto(){
//     await this.page.goto(`/${language.locale}/`)
//  }

  async typeInHeaderSearch(searchTerm: string){
    await this.searchBtn.click({force:true})
    await this.searchField.type(searchTerm)
    // await this.page.keyboard.press('Enter')
    //await this.startSearch.click({force:true})
}  

 async triggerSearchViaEnter(){
    await this.page.keyboard.press('Enter')
 }

 async triggerSearchViaButton(locale: string | undefined){
    if(locale =="fr"){
        await this.startSearchFrench.click({force:true})
    }else if(locale=="en"){
        await this.startSearchEnglish.click({force:true})
    }else{
        await this.startSearchGerman.click({force:true})
    }
    
 }

async clickOnLogo(){
  await this.logo.click({force:true})
}
}