import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { HomePage } from '../pages/HomePage.js'
import { searchResultPage as SearchResultPage} from '../pages/searchResultPage.js'
import { ProductInfoPage } from '../pages/productInfoPage.js'

//defining types for page fixtures
type pageFixtures={
    loginPage:LoginPage;
    homePage:HomePage;
    searchResultPage:SearchResultPage;
    productInfoPage:ProductInfoPage;
}
 let test=baseTest.extend<pageFixtures>({
    loginPage:async ({page},use)=>{
        let loginPage=new LoginPage(page)
        await use(loginPage);

    },

homePage:async ({page},use)=>{
        let homePage=new HomePage(page)
        await use(homePage);

    },

searchResultPage:async ({page},use)=>{
        let searchresultPage=new SearchResultPage(page)
        await use(searchresultPage);

    },

productInfoPage:async ({page},use)=>{
        let productInfoPage=new ProductInfoPage(page)
        await use(productInfoPage);

    }


})
export {expect} from '@playwright/test'
export {test}