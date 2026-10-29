import {test,expect, Locator, Page} from '@playwright/test'
import { Basepage } from './Basepage.js'

export class HomePage extends Basepage
{
    private readonly headers:Locator;
    private readonly logOutLink:Locator;
    

    constructor(page:Page)
    {
        super(page);
        this.headers=page.locator("h2");
        this.logOutLink=page.locator("(//a[text()='Logout'])[2]");
        
    }

    async getHomePageTitle():Promise<string>
    {
        return await this.page.title();
    }

    async gethomePageHeaders():Promise<string[]>
    {
        let headerList:string[]=await this.headers.allInnerTexts();
        return headerList;
    }

    async isLogoutLinkAvailable():Promise<boolean>
    {
        return await this.logOutLink.isVisible();
    }

    async doSearch(searchText:string):Promise<void>
    {   console.log('search from the produt', searchText);
        await this.searchBar.fill(searchText);
        await this.searchIcon.click();
        
    }



}

