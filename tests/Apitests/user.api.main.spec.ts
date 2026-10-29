import {test,expect} from '../../src/fixtures/APIFixtures.js';

let token={Authorization:process.env.API_TOKEN!};
let userId:number;
test.describe.serial('API Automation',()=>{



test('get all users',async ({apiHelper})=>{
    let res=await apiHelper.getAPI('public/v2/users/',token);
    expect(res.statusCode).toBe(200);
    expect(res.responseBody.length).toBeGreaterThan(5);

})

test('create Fresh User',async ({apiHelper})=>{

    let userdata1={
    "name": "Hari S",
    "email": "Haris@gibson.test",
    "gender": "male",
    "status": "active"
}
    let res=await apiHelper.PostAPI('public/v2/users/',userdata1,token);
    expect(res.statusCode).toBe(201);
    expect(res.responseBody.name).toBe(userdata1.name);
     userId=res.responseBody.id;
    console.log(userId);


})


test('update the created User',async ({apiHelper})=>{

    let userdata1={
    "name": "Hari k",
    "email": "Harik@gibson.test",
    "gender": "male",
    "status": "active"
}
    let res=await apiHelper.updateAPI(`public/v2/users/${userId}`,userdata1,token);
    expect(res.statusCode).toBe(200);
    
  

})


test('delete the created User',async ({apiHelper})=>{

    
    let res=await apiHelper.deleteAPI(`public/v2/users/${userId}`,token);
    expect(res.statusCode).toBe(204);
    
  

})

});