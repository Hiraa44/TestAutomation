import { Page} from 'playwright/test';
export class Login{
    page : Page
    usernameInput 
    passwordInput
    submitButton

    constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.getByRole('button', { name: 'Login' });
    }

         
}