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

}

export default new RegisterPage;