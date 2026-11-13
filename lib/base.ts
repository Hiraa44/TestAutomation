import {test, Page} from '@playwright/test';
import {LoginPage} from '../pages/login';

export class BasePage{

    page : Page;
    LoginObject : LoginPage;
    
    constructor(page : Page){
       this.page=page;
       this.LoginObject = new LoginPage(this.page);
    }
    
    async NavigatetoURL(){
        this.page.goto('https://demo.applitools.com/');
        this.LoginObject.login('admin', 'admin');
    }

}