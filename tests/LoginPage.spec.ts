//import process from 'node:process';
import {test,expect} from '../src/fixtures/pageFixtures.js'
import { CsvHelper } from '../src/Utils/csvUtils.js';
import { ExcelHelper } from '../src/Utils/ExcelUtils.js';
import { JsonHelper } from '../src/Utils/JsonUtils';

test.beforeEach(async ({loginPage})=>{
    
    await loginPage.goToLoginPage();
    //homepage=new HomePage(page)
})

test('Login Page Tite Test',async ({loginPage}) => {
    
    let title=await loginPage.LoginPageTitle();
    expect(title).toBe('Account Login');
    
})

test('Forgot Password Link Exist',async ({loginPage}) => {
   
    let boolean=await loginPage.ForgotPwdLinkAvailable();
    expect(boolean).toBeTruthy();
    
})

test('Test Do Login',async ({loginPage,homePage}) => {
    
   
    await loginPage.DoLogin(process.env.USER_NAME!,process.env.PASSWORD!);
    let flag:boolean=await homePage.isLogoutLinkAvailable();
    expect(flag).toBeTruthy();   
})
let testdata:Record<string, string>[]=CsvHelper.readCsv('./src/TestData/logiondata.csv');
for(let data of testdata)
{
    
test(`Negative Login csv ${data.username} and ${data.password}`,async ({loginPage,homePage}) => {
    
   
    await loginPage.DoLogin(data.username,data.password);
    let errorMsg:string=await loginPage.getPageErrorMsg();
    expect.soft(errorMsg).toContain('Warning');
})
}




let testdata2:Record<string, string>[]=ExcelHelper.readExcel('src/TestData/LoginData.xlsx');
for(let data1 of testdata2)
{
    
test(`Negative Login excel ${data1.username} and ${data1.password}`,async ({loginPage,homePage}) => {
    
   
    await loginPage.DoLogin(data1.username,data1.password);
    let errorMsg:string=await loginPage.getPageErrorMsg();
    expect.soft(errorMsg).toContain('Warning');
})
}


let testdata3:Record<string, string>[]=JsonHelper.readJson('src/TestData/jsonData.json');
for(let data1 of testdata3)
{
    
test(`Negative Login excel ${data1.username} and ${data1.password}`,async ({loginPage,homePage}) => {
    
   
    await loginPage.DoLogin(data1.username,data1.password);
    let errorMsg:string=await loginPage.getPageErrorMsg();
    expect.soft(errorMsg).toContain('Warning');
})
}


