class LoginPage {
    elements={
        LINKS: {
            CADASTRO: ()=> cy.get('a:contains("Cadastre-se")'),
        },
        INPUTS:{
            EMAIL: ()=> cy.get('input[data-testid="email"]'),
            SENHA: ()=> cy.get('input[data-testid="senha"]')
        },
        BUTTONS:{
            ENTRAR: ()=>cy.get('button[data-testid="entrar"]')
        }
    }

    clickCadastro(){
        this.elements.LINKS.CADASTRO().click();
    }

    clickEntrar(){
        this.elements.BUTTONS.ENTRAR().click();
    }

    setEmail(email){
        this.elements.INPUTS.EMAIL().type(email);
    }

    setSenha(password){
        this.elements.INPUTS.SENHA().type(password);
    }


}

export default new LoginPage;