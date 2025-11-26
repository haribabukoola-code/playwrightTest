
import {test,expect} from "@playwright/test";

test ("Tada Web Page",async ({page})=> {

  //Test lines
  await page.goto("https://solutions.tadanow.com/app/");
 
  let  title: string=await page.title();
  console.log("title:",title);

  await expect(page).toHaveTitle("TADA - Single Sign On");

})