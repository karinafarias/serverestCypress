class SearchPage {
    elements = {
        INPUTS:{
            PESQUISAR_PRODUTO: ()=>cy.get('input[placeholder="Pesquisar Produtos"]')
        },
        BUTTONS:{
            PESQUISAR: ()=>cy.get('button[data-testid="botaoPesquisar"]')
        },
        LINKS:{
            SEARCH_RESULTS: ()=> cy.get('div.card-body > a[data-testid="product-detail-link"] ~ h5')
        }
    }

    setPesquisarProduto(product){
        this.elements.INPUTS.PESQUISAR_PRODUTO().type(product);
    }

    clickPesquisar(){
        this.elements.BUTTONS.PESQUISAR().click();
    }

    getSearchResults(){
        return this.elements.LINKS.SEARCH_RESULTS();
    }
}
export default new SearchPage;