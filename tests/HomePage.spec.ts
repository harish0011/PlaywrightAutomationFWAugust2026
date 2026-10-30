import {test,expect} from '../src/fixtures/pageFixtures.js'



test.beforeEach(async ({loginPage})=>{
    
    await loginPage.goToLoginPage();
    await loginPage.DoLogin(process.env.USER_NAME!,process.env.PASSWORD!)
    

})

test("Home page title test",async ({homePage})=>
{
    let homeTitle:string=await homePage.getHomePageTitle()
    expect(homeTitle).toBe('My Account');
})

test("Home page Logout Link",async ({homePage})=>
{
    let homeTitle:boolean=await homePage.isLogoutLinkAvailable()
    expect(homeTitle).toBeTruthy();
})

test("Home page headers",async ({homePage})=>
{
    let headers:string[]=await homePage.gethomePageHeaders()
    expect(headers).toHaveLength(3);
})