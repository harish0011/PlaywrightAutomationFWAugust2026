import { test,expect } from '@playwright/test'

let AUTH_TOKEN={'Authorization':'Bearer 79a53c661d6d316618a5dbf347b7c8ab61d7c08138e923d8511e4be628567ee5'}
test('API get request',async ({request})=>{
    let response=await request.get('https://gorest.co.in/public/v2/users/',{headers:AUTH_TOKEN});
    console.log(response);
    let responseBody=await response.json();
    console.log('response body is',responseBody);
    console.log('satus code  is',response.status());
    console.log('response message is',response.statusText());
})


test('API create Data',async ({request})=>{

    let userdata={
    "name": "Karthick",
    "email": "karthi001@gibson.test",
    "gender": "male",
    "status": "active"
}
    let response=await request.post('https://gorest.co.in/public/v2/users/',{headers:AUTH_TOKEN,data:userdata});
    console.log(response);
    let responseBody=await response.json();
    console.log('response body is',responseBody);
    console.log('satus code  is',response.status());
    console.log('response message is',response.statusText());
})


test('API update the Data',async ({request})=>{

    let userdata1={
    "name": "Karthickeyan",
    "email": "karthi001@gibson.test",
    "gender": "male",
    "status": "inactive"
}
    let response=await request.put('https://gorest.co.in/public/v2/users/8683736',{headers:AUTH_TOKEN,data:userdata1});
    //console.log(response);
    let responseBody=await response.json();
    console.log('response body is',responseBody);
    console.log('satus code  is',response.status());
    console.log('response message is',response.statusText());
})


test('API delete the Data',async ({request})=>{

    
    let response=await request.delete('https://gorest.co.in/public/v2/users/8686400',{headers:AUTH_TOKEN});
    //console.log(response);
    
    console.log('satus code  is',response.status());
    console.log('response message is',response.statusText());
})