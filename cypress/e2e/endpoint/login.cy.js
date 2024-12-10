describe('Login - /login',()=>{
    beforeEach(function(){
        cy.fixture('/endpointBody/loginAdmin.json').then($admin =>{
            cy.wrap($admin).as('adminData')
        })
    })
    it('validate successful login',function(){
        cy.request('POST',`${Cypress.env('endpointBaseUrl')}/login`,this.adminData).then($response=>{
            expect($response.status).to.be.eq(200);
            expect($response.body).have.property('authorization');
            expect($response.body.message).to.be.eq('Login realizado com sucesso');

        })
    })

    it('validate user is not able to login with wrong password',function(){
        this.adminData.password = 'shouldNotWork';
        cy.request({
            method:'POST',
            url:`${Cypress.env('endpointBaseUrl')}/login`,
            body: this.adminData,
            failOnStatusCode: false}
        ).then($response=>{
            expect($response.status).to.be.eq(401);
            expect($response.body).to.not.have.property('authorization');
            expect($response.body.message).to.be.eq('Email e/ou senha inválidos');

        })
    })
})
