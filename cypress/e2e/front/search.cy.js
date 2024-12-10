import SearchPage from "../../pages/SearchPage";

describe('Search products',()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.loginFront();
        cy.fixture('productSearch.json').then($prod =>{
            return cy.wrap($prod)
        }).as('product')
    })

    it('Validate user is able to search a product',()=>{
        cy.get('@product').then($product =>{
            SearchPage.setPesquisarProduto($product.product);
            SearchPage.clickPesquisar();
            SearchPage.getSearchResults().then($results=>{
                expect($results).contain($product.product)
            })
        }) 
    })

})