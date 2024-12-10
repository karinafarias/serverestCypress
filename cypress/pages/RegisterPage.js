class RegisterPage {
    elements={
        BUTTONS: {
            CADASTRAR: ()=> cy.get('button[data-testid="cadastrar"]'),
        },
        INPUTS:{
            NOME:()=> cy.get('input[data-testid="nome"]'),
            EMAIL:()=> cy.get('input[data-testid="email"]'),
            SENHA:()=> cy.get('input[data-testid="password"]')
        },
        TEXTS:{
            CADASTRO_MESSAGE: ()=>cy.get('a.alert-link')
        },
        CHECKBOXES:{
            IS_ADMIN: ()=>cy.get('input[data-testid="checkbox"]')
        }

    }
    setNome(name){
        this.elements.INPUTS.NOME().type(name);
    }

    setEmail(email){
        this.elements.INPUTS.EMAIL().type(email);
    }

    setSenha(password){
        this.elements.INPUTS.SENHA().type(password);
    }

    clickCadastrar(){
        this.elements.BUTTONS.CADASTRAR().click();
    }

    getCadastroMessage(){
        return this.elements.TEXTS.CADASTRO_MESSAGE();
    }

    checkIsAdmin(){
        this.elements.CHECKBOXES.IS_ADMIN().click();
    }

}

export default new RegisterPage;