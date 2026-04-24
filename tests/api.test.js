const { test, expect } =  require('@playwright/test');
const {LOGIN_MUTATION} = require('../queries/authQueries');
const {ADD_ITEM_MUTATION} = require('../queries/projectQueries');

test.skip('Login via API' , async ({request}) => {

    const response = await request.post("https://develop.fohlio.io/be/graphql", {
        data: {
            operationName: "LogIn",
            variables: {
                email: "team1.owner@fohlio.io",
                password: "12qwasZX!"
            },
            query: LOGIN_MUTATION
    }});

    const body  = await response.json();
    const token  = body.data.userSignIn.authTokens.authToken ; 
    expect(token).toBeTruthy();
    //console.log(token);

    const addResponse = await request.post("https://develop.fohlio.io/be/graphql", {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            operationName: "AddProjectSheetProjectModel",
            query : ADD_ITEM_MUTATION,
            variables: {
                projectModelAttributes: {
                    projectId: "7",
                    scheduleId: "68"
                }
            },
        }
    });

    expect(addResponse.status()).toBe(200);

    const addBody = await addResponse.json();
    console.log(JSON.stringify(addBody, null, 2));
    const addedItemId = addBody.data.projectModelCreate.projectModel.id;
    expect(addedItemId).toBeTruthy();
    console.log('Added item ID:', addedItemId);

});


