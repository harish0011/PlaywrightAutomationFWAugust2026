import { count } from 'console';
import {test,expect} from '../src/fixtures/pageFixtures'
import { CsvHelper } from '../src/Utils/csvUtils';

//import { LoginPage } from '../src/pages/LoginPage.js'

test.beforeEach(async ({loginPage})=>
{
    await loginPage.goToLoginPage();
    await loginPage.DoLogin(process.env.USER_NAME!,process.env.PASSWORD!);

})
test("Verify search functionality", async ({homePage,searchResultPage})=>
{
    await homePage.doSearch('Samsung');
    let header:string=await searchResultPage.getSearchResultHeader()
    expect(header).toContain('Samsung');
})

test("Verify count Headers", async ({homePage,searchResultPage})=>
{
    await homePage.doSearch('macbook');
    let productCount:number=await searchResultPage.getSearchResultCount();
    expect(productCount).toBeGreaterThan(0);
})

test("Verify click functionality", async ({homePage,searchResultPage,page})=>
{
    await homePage.doSearch('macbook');
    await searchResultPage.selectAndClickOnProduct('MacBook Air');
    expect(page).toHaveTitle('MacBook Air');
    
})

test("Verify click functionality using csv file", async ({homePage,searchResultPage,page})=>
{
    let ProductData:Record<string, string>[]=CsvHelper.readCsv('src/TestData/product.csv');
    //console.log(ProductData.);
        await homePage.doSearch(ProductData[0]?.searchKey);
        let productCount:number=await searchResultPage.getSearchResultCount();
    await searchResultPage.selectAndClickOnProduct(ProductData[0]?.productName);
    //expect(page).toHaveTitle();
     
    expect(productCount).toBeGreaterThan(parseInt(ProductData[0]?.Count));
    
    
    
})