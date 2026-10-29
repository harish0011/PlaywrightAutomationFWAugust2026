import {test as baseTest} from '@playwright/test'
import { APIPage } from '../Api/Apihelper'
type apiFixtures={
apiHelper:APIPage;
    }
export const test=baseTest.extend<apiFixtures>({
    apiHelper:async ({request},use)=>{
        let apiHelper=new APIPage(request,process.env.API_BASE_URL!)
        await use(apiHelper);
    }
})
//are you there
export {expect} from '@playwright/test'