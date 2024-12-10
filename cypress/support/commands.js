import LoginPage from "../pages/LoginPage"

Cypress.Commands.add('loginFront', (email, password) => { 
    if(!email || !password){
        cy.fixture('loginUser.json').then($user=>{
            LoginPage.setEmail($user.email);
            LoginPage.setSenha($user.password);
            LoginPage.clickEntrar();
        })
    }else{
        LoginPage.setEmail(email);
        LoginPage.setSenha(password);
        LoginPage.clickEntrar();
    }
})
