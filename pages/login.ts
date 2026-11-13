import {Page, Locator} from '@playwright/test';

export class LoginPage{
     page:Page;
     username : Locator;
     password: Locator;
     SignIn : Locator;

    constructor (page:Page){
        this.page= page;
        this.username = page.getByPlaceholder("Enter your Username");
        this. password = page.getByPlaceholder("Enter your Password");
        this.SignIn = page.getByText('Sign In');
    }
  async login(uname : string, pass : string){
    await this.username.fill(uname);
    await this.password.fill(pass);
    await this.SignIn.click();
  }

}