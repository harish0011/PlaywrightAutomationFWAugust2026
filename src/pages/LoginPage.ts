import {Locator, Page} from '@playwright/test'
import {Basepage} from './Basepage'

export class LoginPage extends Basepage
{
    private readonly emailId:Locator;
    private readonly password:Locator;
    private readonly loginBtn:Locator;
    private readonly ForgotPwdLink:Locator;
    private readonly pageErrorMsg:Locator;
    

    constructor(page:Page)
    {   super(page);
        this.emailId=page.locator('#input-email')
        this.password=page.locator('#input-password')
        this.loginBtn=page.locator("//button[text()='Login']")
        this.ForgotPwdLink=page.locator("(//a[text()='Forgotten Password'])[1]")
        this.pageErrorMsg=page.locator('.alert.alert-danger.alert-dismissible');
        

    }

    async goToLoginPage():Promise<void>
    {
        await this.page.goto('en-gb?route=account/login');
    }

    async LoginPageTitle():Promise<string>
    {
        return await this.page.title()
    }

    async ForgotPwdLinkAvailable():Promise<boolean>
    {
        return await this.ForgotPwdLink.isVisible()
    }

    async DoLogin(username:string,pwd:string)
    {   await this.page.waitForTimeout(2000);
        await this.emailId.fill(username);
        await this.password.fill(pwd);
        await this.loginBtn.click();
        await this.page.waitForTimeout(2000);
        
    }
    async getPageErrorMsg():Promise<string>
    {
        return await this.pageErrorMsg.innerText()
    }
   
}