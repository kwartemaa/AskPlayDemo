import {test} from "@playwright/test"
import { defaultLanguages as languages } from "../locale";

languages.forEach((language) => {
    test.describe(`test search - ${language.name}`, async()=>{
        test.beforeEach(async ({page})=>{
            test.setTimeout(120000)
            await page.goto(`/${language.locale}/`)
        })
                
        test("perform basic search via enter", async({page,context})=>{
            test.setTimeout(120000)
            // const zebHomePage =  new ZebHomePage(page);
            const newTab = await context.newPage()
            await newTab.goto("https://www.google.com/")
            await newTab.close()
    
                }) 
    
})
})

