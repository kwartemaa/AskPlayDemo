import {test, expect} from "@playwright/test"
import { defaultLanguages as languages } from "../locale";

        test.beforeEach(async ({page})=>{
            test.setTimeout(120000)
            await page.goto(`/fr/`)
        })
                
        test("sms code verification", async({page,context})=>{
            
            test.setTimeout(120000)
            await page.getByText("Réserver Zebrabox").click()
            await page.locator('//div[@class="radio-outer"]').locator("nth=1").click()
            await page.getByText("Sélectionnez").locator("nth=3").click()
            await page.getByText("Particulier").locator("nth=0").click()
            await page.getByAltText("XS").locator("nth=1").click()
            await page.getByText("Continuer").click()
            await page.getByPlaceholder("Salutation*").click()
            await page.getByText("Madame").click()
            await page.getByPlaceholder("Prénom*").type("Test")
            await page.getByPlaceholder("Nom de famille*").type("Tester")
            await page.getByPlaceholder("Courriel*").type("anitester@yopmail.com")
            await page.getByText("+41").locator("nth=0").click()
            await page.getByText('+34').click({force:true})
            await page.getByPlaceholder("Numéro de portable").fill("658194198")
            await page.locator('//span[@class="checkmark"]').check()
            await page.locator('//div[@class="vdp-datepicker"]').click()
            await page.locator('//span[@class="next"]').first().click({force:true})
            await page.locator('//span[@class="cell day"]').last().click()
            await page.getByText("12 mois").click()
            await page.getByText("Continuer vers les tarifs").click({force:true})
            await expect(page).toHaveURL("/fr/calculateur-volume-stockage#/step3")
            await page.getByText("Continuer").click()
            await page.getByRole('button', { name: 'Continuer' }).click({force:true})
            await page.getByText(" Vérifier le numéro de portable * ").click()
            await page.waitForTimeout(10000)
            const newTab = await context.newPage()
            await newTab.goto("https://receive-smss.com/sms/34658194198/")
            await newTab.getByText("Update Messages").click({force:true})
            await expect(newTab.locator('tr:has-text("Zebrabox")').first()).toBeVisible();
            const textLook = await newTab.locator('td:right-of(:text("Zebrabox"))').first().innerText();
            console.log(textLook)
            const splitMessage = textLook.split(" ")
            // const code = textLook.substring(31,textLook.length)
            const code = splitMessage[splitMessage.length-1]
            // console.log(splitMessage)
            console.log(code)
            const codeElements = code.split("")
            for(let counter = 0; counter<6; counter++){
                await page.locator(`//input[@data-name="codeValidation${counter+1}"]`).fill(codeElements[counter])
            }
            await page.getByRole("button", {name: "Confirmer"}).click({force:true})
            await page.getByPlaceholder("Rue, No.*").fill("45678")
            await page.locator("input[name='city']").fill("Test City")
            await page.getByPlaceholder("Date de naissance* (JJ.MM.AAAA)").click()
            await page.getByText("2000",{ exact: true }).click()
            await page.getByText("Février").click()
            await page.getByText("20",{ exact:true }).click()
            await page.locator('input[name="zip"]').fill("45674")
            await page.getByPlaceholder("Confirmer courriel*").fill("anitester@yopmail.com")
            await page.locator('input[placeholder="Valeur des biens*"]').click()
            await page.getByText(' 30’000.- ').click()
            await page.getByPlaceholder('Biens entreposés*').click()
            await page.getByText("Jouets").click()
            await page.getByRole("button", {name:"Continuer"}).click()
            await expect(page).toHaveURL("https://www.zebrabox.ch/fr/calculateur-volume-stockage#/step5")
  
                }) 
    


