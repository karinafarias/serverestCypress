/// <reference types="cypress" />

import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";

describe('New users in Serverest', () => {  
  beforeEach(() => {
    cy.visit('/')
    cy.fixture('registerUser.json').then($user=>{
      return cy.wrap($user);
    }).as('registerUser');
  })

  it('Register and login with new user in Serverest', () => {
    let date = new Date();
    let dateFormatted = date.toISOString().replace(/\D/g, '');
    let email;

    LoginPage.clickCadastro();
    cy.get('@registerUser').then($user =>{
      email = dateFormatted+$user.email;
      RegisterPage.setNome($user.name);
      RegisterPage.setEmail(email);
      RegisterPage.setSenha($user.password);
      RegisterPage.clickCadastrar();
      RegisterPage.getCadastroMessage().should('have.text', 'Cadastro realizado com sucesso');
   })
  })

  it('Register and login with admin user in Serverest', () => {
    let date = new Date();
    let dateFormatted = date.toISOString().replace(/\D/g, '');
    let email;
    LoginPage.clickCadastro();
    cy.get('@registerUser').then($user =>{
      email = dateFormatted+$user.email;
      RegisterPage.setNome($user.name);
      RegisterPage.setEmail(email);
      RegisterPage.setSenha($user.password);
      RegisterPage.checkIsAdmin();
      RegisterPage.clickCadastrar();
      RegisterPage.getCadastroMessage().should('have.text', 'Cadastro realizado com sucesso');
    })
  })

    
})
