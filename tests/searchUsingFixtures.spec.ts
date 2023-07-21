import {test, expect} from "./fixtures/basePage"
import { defaultLanguages as languages } from "../locale";
const searchTerm = "tips"
languages.forEach((language)=>{
    test.beforeEach(async({homePage, page})=>{
        test.setTimeout(120000)
        await page.goto(`/${language.locale}/`)
        await homePage.typeInHeaderSearch(searchTerm)    
    })

    test.afterEach(async({homePage})=>{
        test.setTimeout(120000)
        await homePage.clickOnLogo()
    })

    test("Search via enter", async({homePage})=>{
        test.setTimeout(120000)
        await homePage.triggerSearchViaEnter()  
    })

    test("Search via search button", async({homePage})=>{
        test.setTimeout(120000)
        await homePage.triggerSearchViaButton(language.locale)  
    })
})
