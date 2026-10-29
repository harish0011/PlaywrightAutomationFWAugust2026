import {test,expect} from '../src/fixtures/pageFixtures.js'



test.beforeEach(async ({loginPage})=>{
    
    await loginPage.goToLoginPage();
    await loginPage.DoLogin(process.env.USER_NAME!,process.env.PASSWORD!)
    

})

test("Verify Product Image Count", async ({homePage,searchResultPage,productInfoPage})=>
{
    await homePage.doSearch("macbook");
    await searchResultPage.selectAndClickOnProduct("MacBook Air");
    let ImgCount:number=await productInfoPage.getProductImagesCount();
    expect(ImgCount).toBeGreaterThan(0);

})


test("Verify Product Info Test", async ({homePage,searchResultPage,productInfoPage})=>
{
    await homePage.doSearch("macbook");
    await searchResultPage.selectAndClickOnProduct("MacBook Air");
    let Data:Map<string,string>=await productInfoPage.getProductCompleteInfo();
    expect.soft((Data.get('Brand'))).toBe('Apple');
    expect.soft((Data.get('Product Code'))).toBe('Product 17');
    expect.soft((Data.get('Reward Points'))).toBe('700');
    expect.soft((Data.get('Availability'))).toBe('In Stock');
    expect.soft((Data.get('Product Price'))).toBe('$1,202.00');
    
    

})

//common Functionility test
test("Verify common Logo Test", async ({productInfoPage})=>
{
    let isVisible:boolean=await productInfoPage.isLogoVisible();
    expect(isVisible).toBe(true);

})

test("Verify common footer count Test", async ({productInfoPage})=>
{
    let Footercount:number=await productInfoPage.getPageFootersCount()
    expect(Footercount).toBe(15);

})

test("click on Add to Cart", async ({homePage,searchResultPage,productInfoPage})=>
{
    await homePage.doSearch("macbook");
    await searchResultPage.selectAndClickOnProduct("MacBook Air");
    await productInfoPage.clickonAddToCart();

})