const baseUrl = Cypress.env('endpointBaseUrl');
Cypress.Commands.add('apiToken', function() { 
    cy.fixture('/endpointBody/loginAdmin.json').then($admin =>{
        cy.request({
            method: 'POST',
            url:`${baseUrl}/login`,
            body: $admin,
            failOnStatusCode: false
        }).then($response=>{
            expect($response.status).to.be.eq(200)
            Cypress.env('bearer', $response.body.authorization)
            return cy.wrap($response.body.authorization)
        });
    })
})

