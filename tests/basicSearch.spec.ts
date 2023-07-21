import {test,expect} from "@playwright/test"
import { ZebHomePage } from "../pages/home.page";
import { defaultLanguages as languages } from "../locale";
const searchTerm = "tips"

languages.forEach((language) => {
    test.describe(`test search - ${language.name}`, async()=>{
        test.beforeEach(async ({page})=>{
            test.setTimeout(120000)
            await page.goto(`/${language.locale}/`)
        })
                
        test("perform basic search via enter", async({page, isMobile})=>{
            test.setTimeout(120000)
            const zebHomePage =  new ZebHomePage(page);
            
            await zebHomePage.typeInHeaderSearch(searchTerm)
            await expect(page).toHaveURL(`/${language.locale}/search-results/tips`)            
            // await expect(page.getByText('Suchergebnisse', { exact: true })).toBeVisible();
            if(isMobile){
                await zebHomePage.closeSearchField()
                await zebHomePage.clickOnLogo()
            }else{
                await zebHomePage.clickOnLogo()
            }
            await expect(page).toHaveURL(`/${language.locale}/`)
            // await zebHomePage.clickOnLogo()
            // await expect(page).toHaveURL("/de/")
            // await zebHomePage.closeSearchField() - the search behaves diff. when it is 
            // triggered via the start search button.
    
                }) 
    
})
})

