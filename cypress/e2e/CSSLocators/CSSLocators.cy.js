describe("CSS Locators",()=>{


    it("search T Shrit",()=>{

cy.visit("http://www.automationpractice.pl/index.php")
//Locating the search box and Typing the search Term
let searchTerm="Printed Chiffon Dress"
        cy.get("#search_query_top").type(searchTerm).
        
        //Clicking On The search icon after finishing the search term typing

        cy.get("[name='submit_search']").click()

        //validating serach Term

        cy.get(".lighter").contains(searchTerm)
    })
})