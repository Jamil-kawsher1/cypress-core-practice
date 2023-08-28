describe("Assertion Demo",()=>{


    it("Implecit assertion",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('contain',"OrangeHRM")
        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
        
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

        cy.get('.orangehrm-login-branding > img').should('be.visible')




    })
})