import {Locator, Page} from '@playwright/test'
import { Basepage } from './Basepage.js'
export class searchResultPage extends Basepage
{
    private readonly resultHeader:Locator;
    private readonly SearchResults:Locator;
    constructor(page: Page)
    {
        super(page);
        this.resultHeader=page.locator('//h1');
        this.SearchResults=page.locator('.col.mb-3 .product-thumb')
    }

    async getSearchResultHeader():Promise<string>
    {
        return await this.resultHeader.innerText()
    }

    async getSearchResultCount():Promise<number>
    {
        return await this.SearchResults.count()
    }

    async selectAndClickOnProduct(productName:String)
    {
        //  //a[text()='MacBook Air']
        let productNameClick:Locator=this.page.locator(`(//a[text()='${productName}'])[2]`);
        await productNameClick.click();

    }



}