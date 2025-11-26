
import {test,expect} from "@playwright/test";

test ("Tada Web URL",async ({page})=> {

  //Test lines
  await page.goto("https://solutions.tadanow.com/app/");
 
  let  title: string=await page.url();
  console.log("title:",title);

  await expect(page).toHaveURL(/tadanow.com/);

})