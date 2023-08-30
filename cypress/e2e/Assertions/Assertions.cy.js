

describe("Assertion Demo",()=>{


    it("Implecit assertion",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('contain',"OrangeHRM")
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
        /* (Implecit assertion) Should & And Start here

        */



        //short hand of title and should
        // We can do this at once by chaing them 

        cy.url().should("include","-demo")
        .should("contain","/login")
        .should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")



        //we can use and insted of using should multiple time

        cy.url().should("include","-demo")
        .and("contain","/login")
        .and("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


        //negative assertion

        cy.url().should("not.contain","greenhrm") 


        //check element is visible or not
        //this can check visibility of any web element not just a photo
        cy.get('.orangehrm-login-branding > img').should('be.visible')

        // We can do the simmilar thing with exist method
        cy.get('.orangehrm-login-branding > img').should('exist')


        //checking how many links is avaiable and check their length and also asserting the value

        cy.xpath('//a').should('have.length','5')


        // value input using combine css selector 

        cy.get("input[placeholder='Username']").type("Admin")

        // Cheking the value is successfully typed or not
        cy.get("input[placeholder='Username']").should('have.value','Admin')

         /* Should & And ends  here

        */




         
    })


    it("Explecit Assertion ",()=>{


        /* Explecit Assertion (expeact,assert)

         expect(BDD) - Normally used in BDD approach
         assert(TDD) - Normally Used in TDD Approach


         Explecit  Assertion Starts Here

         */


        /*
        You can find all type of assertion in the documentation https://docs.cypress.io/guides/references/assertions

        */


         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         
         cy.get("input[placeholder='Username']").type("Admin")
         cy.get("input[placeholder='Password']").type("admin123")
         cy.get("button[type='submit']").click()

         let expName="xyz"

         /* to use explecit assertion like bdd or ttd style assertion we need to
            get the value first using cy.get(...).then() and then need to add custom function like bellow
         */

         cy.get(".oxd-userdropdown-name").then((element)=>{


            let value=element.text();

            //BDD Style Assertion
            expect(value).to.equal(value)
            expect(expName).to.not.equal(value)

            //TDD Style Assertion
            assert.equal(expName,value)
            assert.notEqual(expName,value)


         })


















         /* Explecit Assertion (expeact,assert)

         expect(BDD) - Normally used in BDD approach
         assert(TDD) - Normally Used in TDD Approach


         Explecit  Assertion Ends Here

         
         
         */
    })


    
})