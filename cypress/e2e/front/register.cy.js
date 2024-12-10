/// <reference types="cypress" />
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

describe('New users in Serverest', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('registerUser.json').then($user=>{
      return cy.wrap($user);
    }).as('registerUser');
  })

  it('Register and login with new user in Serverest', () => {
    let date = new Date()
    cy.log(date.toISOString())
    let dateFormatted = date.toISOString().replace(/\D/g, '');
    let email = dateFormatted+$user.email;

    LoginPage.clickCadastro();
    cy.get('@registerUser').then($user =>{
      RegisterPage.setNome($user.name);
      RegisterPage.setEmail(email);
      RegisterPage.setSenha($user.password);
      RegisterPage.clickCadastrar();
      RegisterPage.getCadastroMessage().should('have.text', 'Cadastro realizado com sucesso');
   })
   
  })

  it('can add new todo items', () => {
    
  })

    
})
