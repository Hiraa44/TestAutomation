import { expect,test} from '@playwright/test';

test("This is my API testing", async({request})=>{
     const response = await request.get('https://reqres.in/api/users/2');
     console.log(response);
    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.first_name).toBe('Janet');
    expect(responseBody.data.support.sponsored_by).toBe('Clerk');
    

});