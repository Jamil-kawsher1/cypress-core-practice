const { faker } = require("@faker-js/faker")

describe("Handle dropdown",()=>{

    it("dropdown with select",()=>{


        cy.visit("https://kitchen.applitools.com/ingredients/select")
       
        //selectig value garlic from the dropdown also assert the value
        cy.get('#spices-select-single').select("garlic").should("have.value","garlic")
        
    })

    it("dropdown without select",()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        let countryDropdown=cy.get("#select2-billing_country-container");
        countryDropdown.click()

        //HERE  no select tag is avaiable so we have to do:
           // 1. Click on that element
           // 2. Then Search and type using type and enter button
        cy.get('.select2-search__field').type("Bangladesh").type('{enter}')
        //Checking the text value is Bangladesh Or not.
        //We have to use this for non Select tag value assertion
        cy.get("#select2-billing_country-container").should("have.text","Bangladesh")

    
    })


    it("Auto Suggested Dropdown",()=>{
        cy.visit("https://www.wikipedia.org/")

        let randomString=faker.animal.bird();
        cy.get("#searchInput").type(randomString).type('{enter}')
        cy.get('.mw-page-title-main').should("have.text", /randomstring/i)
        // cy.get('.mw-page-title-main').should("have.text",randomString)

        
    })
})