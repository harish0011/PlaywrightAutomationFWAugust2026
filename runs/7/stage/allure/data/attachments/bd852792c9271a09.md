# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Apitests/user.api.main.spec.ts >> API Automation >> get all users
- Location: tests/Apitests/user.api.main.spec.ts:9:5

# Error details

```
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
```

# Test source

```ts
  1  | import { APIRequestContext } from "@playwright/test";
  2  | export class APIPage
  3  | {private readonly request:APIRequestContext;
  4  |     private readonly baseUrl:string;
  5  |     constructor(request:APIRequestContext,baseUrl:string)
  6  |     {
  7  |         this.request=request;
  8  |         this.baseUrl=baseUrl
  9  |     }
  10 | 
  11 |     async getAPI(endpoint:string,requestHeaders:Record<string,string>)
  12 |     {
  13 |         let res=await this.request.get(`${this.baseUrl}${endpoint}`,{headers:requestHeaders});
  14 |         return{
  15 |             statusCode:res.status(),
> 16 |             responseBody:await res.json()
     |                          ^ SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  17 | 
  18 |         }
  19 |     
  20 |     }
  21 | 
  22 | 
  23 |     async PostAPI(endpoint:string,bodyData:object,requestHeaders:Record<string,string>)
  24 |     {
  25 |         let res=await this.request.post(`${this.baseUrl}${endpoint}`,{headers:requestHeaders,data:bodyData});
  26 |         return{
  27 |             statusCode:res.status(),
  28 |             responseBody:await res.json()
  29 | 
  30 |         }
  31 |     
  32 |     }
  33 | 
  34 |     async updateAPI(endpoint:string,bodyData:object,requestHeaders:Record<string,string>)
  35 |     {
  36 |         let res=await this.request.put(`${this.baseUrl}${endpoint}`,{headers:requestHeaders,data:bodyData});
  37 |         return{
  38 |             statusCode:res.status(),
  39 |             responseBody:await res.json()
  40 | 
  41 |         }
  42 |     
  43 |     }
  44 | 
  45 |     async deleteAPI(endpoint:string,requestHeaders:Record<string,string>)
  46 |     {
  47 |         let res=await this.request.delete(`${this.baseUrl}${endpoint}`,{headers:requestHeaders});
  48 |         return{
  49 |             statusCode:res.status(),
  50 |             responseBody:res.statusText()
  51 | 
  52 |         }
  53 |     
  54 |     }
  55 | }
```