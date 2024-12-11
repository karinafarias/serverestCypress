describe('User - /usuarios',()=>{
    beforeEach(function (){
        cy.fixture('endpointBody/registerUser.json').then($user=>{
            cy.wrap($user).as('registerUser');
          });
    })

    it('Registering new user',function(){
        let date = new Date();
        let dateFormatted = date.toISOString().replace(/\D/g, '');
        this.registerUser.email = dateFormatted + 'test@test.com'
        
        cy.request('POST',`${Cypress.env('endpointBaseUrl')}/usuarios`,this.registerUser).then($response=>{
            expect($response.status).to.be.eq(201);
            expect($response.body.message).to.be.eq('Cadastro realizado com sucesso');
            expect($response.body).to.have.property('_id');

            cy.request('GET',`${Cypress.env('endpointBaseUrl')}/usuarios/${$response.body._id}`).should('to.have', this.registerUser.nome)

        })
    })
})