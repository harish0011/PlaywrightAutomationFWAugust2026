# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPage.spec.ts >> Test Do Login @sanity
- Location: tests/LoginPage.spec.ts:27:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - list [ref=e6]:
        - listitem [ref=e7]:
          - link "$ Currency " [ref=e10] [cursor=pointer]:
            - /url: "#"
            - strong [ref=e11]: $
            - text: Currency
            - generic [ref=e12]: 
        - listitem
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link " +91 98765 43210" [ref=e16] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - generic [ref=e17]: 
            - text: +91 98765 43210
        - listitem [ref=e18]:
          - link " My Account " [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
            - text: My Account
            - generic [ref=e22]: 
        - listitem [ref=e23]:
          - link " Wish List (0)" [ref=e24] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - generic [ref=e25]: 
            - text: Wish List (0)
        - listitem [ref=e26]:
          - link " Shopping Cart" [ref=e27] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/cart
            - generic [ref=e28]: 
            - text: Shopping Cart
        - listitem [ref=e29]:
          - link " Checkout" [ref=e30] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=checkout/checkout
            - generic [ref=e31]: 
            - text: Checkout
  - banner [ref=e32]:
    - generic [ref=e34]:
      - link [ref=e37] [cursor=pointer]:
        - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - img "NLTECH Trainings Hub" [ref=e38]
      - generic [ref=e40]:
        - textbox "Search" [ref=e41]
        - button "" [ref=e42] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=e46] [cursor=pointer]:
        - generic [ref=e47]: 
        - text: 0 item(s) - $0.00
  - main [ref=e48]:
    - navigation [ref=e50]:
      - text: 
      - list [ref=e52]:
        - listitem [ref=e53]:
          - link "Desktops" [ref=e54] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/desktops
        - listitem [ref=e55]:
          - link "Laptops & Notebooks" [ref=e56] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/laptop-notebook
        - listitem [ref=e57]:
          - link "Components" [ref=e58] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/component
        - listitem [ref=e59]:
          - link "Tablets" [ref=e60] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/tablet
        - listitem [ref=e61]:
          - link "Software" [ref=e62] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/software
        - listitem [ref=e63]:
          - link "Phones & PDAs" [ref=e64] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/smartphone
        - listitem [ref=e65]:
          - link "Cameras" [ref=e66] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/cameras
        - listitem [ref=e67]:
          - link "MP3 Players" [ref=e68] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb/catalog/mp3-players
    - generic [ref=e69]:
      - list [ref=e70]:
        - listitem [ref=e71]:
          - link "" [ref=e72] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=common/home
        - listitem [ref=e74]:
          - link "Account" [ref=e75] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
        - listitem [ref=e76]:
          - link "Login" [ref=e77] [cursor=pointer]:
            - /url: https://opencart.nltechtrainings.com/en-gb?route=account/login
      - generic [ref=e78]:
        - generic [ref=e79]: 
        - text: "Warning: No match for E-Mail Address and/or Password."
        - button [ref=e80] [cursor=pointer]
      - generic [ref=e81]:
        - generic [ref=e83]:
          - generic [ref=e85]:
            - heading "New Customer" [level=2] [ref=e86]
            - paragraph [ref=e87]:
              - strong [ref=e88]: Register Account
            - paragraph [ref=e89]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
            - link "Continue" [ref=e91] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/register
          - generic [ref=e94]:
            - heading "Returning Customer" [level=2] [ref=e95]
            - paragraph [ref=e96]:
              - strong [ref=e97]: I am a returning customer
            - generic [ref=e98]:
              - generic [ref=e99]: E-Mail Address
              - textbox "E-Mail Address" [ref=e100]: Haei123@gmail.com
            - generic [ref=e101]:
              - generic [ref=e102]: Password
              - textbox "Password" [ref=e103]: "1234567890"
              - link "Forgotten Password" [ref=e104] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/forgotten
            - button "Login" [ref=e106] [cursor=pointer]
        - complementary [ref=e107]:
          - generic [ref=e108]:
            - link "Login" [ref=e109] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/login
            - link "Register" [ref=e110] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/register
            - link "Forgotten Password" [ref=e111] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/forgotten
            - link "My Account" [ref=e112] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
            - link "Payment Methods" [ref=e113] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/payment_method
            - link "Address Book" [ref=e114] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/address
            - link "Wish List" [ref=e115] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - link "Order History" [ref=e116] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order
            - link "Downloads" [ref=e117] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/download
            - link "Subscriptions" [ref=e118] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/subscription
            - link "Reward Points" [ref=e119] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/reward
            - link "Returns" [ref=e120] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns
            - link "Transactions" [ref=e121] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/transaction
            - link "Newsletter" [ref=e122] [cursor=pointer]:
              - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter
  - contentinfo [ref=e123]:
    - generic [ref=e124]:
      - generic [ref=e125]:
        - generic [ref=e126]:
          - heading "Information" [level=5] [ref=e127]
          - list [ref=e128]:
            - listitem [ref=e129]:
              - link "Terms & Conditions" [ref=e130] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/terms
            - listitem [ref=e131]:
              - link "Delivery Information" [ref=e132] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/delivery
            - listitem [ref=e133]:
              - link "About Us" [ref=e134] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/about-us
            - listitem [ref=e135]:
              - link "Privacy Policy" [ref=e136] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/information/privacy
        - generic [ref=e137]:
          - heading "Customer Service" [level=5] [ref=e138]
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Contact Us" [ref=e141] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/contact
            - listitem [ref=e142]:
              - link "Returns" [ref=e143] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/returns.add
            - listitem [ref=e144]:
              - link "Site Map" [ref=e145] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=information/sitemap
        - generic [ref=e146]:
          - heading "Extras" [level=5] [ref=e147]
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Brands" [ref=e150] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb/brands
            - listitem [ref=e151]:
              - link "Affiliate" [ref=e152] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/affiliate
            - listitem [ref=e153]:
              - link "Specials" [ref=e154] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=product/special
        - generic [ref=e155]:
          - heading "My Account" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "My Account" [ref=e159] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/account
            - listitem [ref=e160]:
              - link "Order History" [ref=e161] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/order
            - listitem [ref=e162]:
              - link "Wish List" [ref=e163] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/wishlist
            - listitem [ref=e164]:
              - link "Newsletter" [ref=e165] [cursor=pointer]:
                - /url: https://opencart.nltechtrainings.com/en-gb?route=account/newsletter
      - separator [ref=e166]
      - paragraph [ref=e167]:
        - text: Powered By
        - link "OpenCart" [ref=e168] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: NLTECH Trainings Hub © 2026
```

# Test source

```ts
  1  | //import process from 'node:process';
  2  | import {test,expect} from '../src/fixtures/pageFixtures.js'
  3  | import { CsvHelper } from '../src/Utils/csvUtils.js';
  4  | import { ExcelHelper } from '../src/Utils/ExcelUtils.js';
  5  | import { JsonHelper } from '../src/Utils/JsonUtils';
  6  | 
  7  | test.beforeEach(async ({loginPage})=>{
  8  |     
  9  |     await loginPage.goToLoginPage();
  10 |     //homepage=new HomePage(page)
  11 | })
  12 | 
  13 | test('Login Page Tite Test @sanity',async ({loginPage}) => {
  14 |     
  15 |     let title=await loginPage.LoginPageTitle();
  16 |     expect(title).toBe('Account Login');
  17 |     
  18 | })
  19 | 
  20 | test('Forgot Password Link Exist',async ({loginPage}) => {
  21 |    
  22 |     let boolean=await loginPage.ForgotPwdLinkAvailable();
  23 |     expect(boolean).toBeTruthy();
  24 |     
  25 | })
  26 | 
  27 | test('Test Do Login @sanity',async ({loginPage,homePage}) => {
  28 |     
  29 |    
  30 |     await loginPage.DoLogin(process.env.USER_NAME!,process.env.PASSWORD!);
  31 |     let flag:boolean=await homePage.isLogoutLinkAvailable();
> 32 |     expect(flag).toBeTruthy();   
     |                  ^ Error: expect(received).toBeTruthy()
  33 | })
  34 | let testdata:Record<string, string>[]=CsvHelper.readCsv('./src/TestData/logiondata.csv');
  35 | for(let data of testdata)
  36 | {
  37 |     
  38 | test(`Negative Login csv ${data.username} and ${data.password}`,async ({loginPage,homePage}) => {
  39 |     
  40 |    
  41 |     await loginPage.DoLogin(data.username,data.password);
  42 |     let errorMsg:string=await loginPage.getPageErrorMsg();
  43 |     expect.soft(errorMsg).toContain('Warning');
  44 | })
  45 | }
  46 | 
  47 | 
  48 | 
  49 | 
  50 | let testdata2:Record<string, string>[]=ExcelHelper.readExcel('src/TestData/LoginData.xlsx');
  51 | for(let data1 of testdata2)
  52 | {
  53 |     
  54 | test(`Negative Login excel ${data1.username} and ${data1.password}`,async ({loginPage,homePage}) => {
  55 |     
  56 |    
  57 |     await loginPage.DoLogin(data1.username,data1.password);
  58 |     let errorMsg:string=await loginPage.getPageErrorMsg();
  59 |     expect.soft(errorMsg).toContain('Warning');
  60 | })
  61 | }
  62 | 
  63 | 
  64 | let testdata3:Record<string, string>[]=JsonHelper.readJson('src/TestData/jsonData.json');
  65 | for(let data1 of testdata3)
  66 | {
  67 |     
  68 | test(`Negative Login excel ${data1.username} and ${data1.password}`,async ({loginPage,homePage}) => {
  69 |     
  70 |    
  71 |     await loginPage.DoLogin(data1.username,data1.password);
  72 |     let errorMsg:string=await loginPage.getPageErrorMsg();
  73 |     expect.soft(errorMsg).toContain('Warning');
  74 | })
  75 | }
  76 | 
  77 | 
  78 | 
```