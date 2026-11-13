import { test, expect } from '@playwright/test';
import { LoginPage} from '../pages/login';
import { BasePage } from '../lib/base.ts';

test ("Test Case 1", async ({page}) =>{
   await page.goto('https://demo.applitools.com/');
    await page.waitForTimeout(3000);
    
    const basePage = new BasePage(page);
    basePage.NavigatetoURL();
    await expect(page).toHaveURL('https://demo.applitools.com/app.html');


});









