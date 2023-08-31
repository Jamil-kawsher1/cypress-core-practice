describe("Check UI elements",()=>{

    it("Checking radio buttons",()=>{


        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        // cy.pasw
        // cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').
        // cy.wait("5000").get("[id='yesRadio']").click()
         // click and validate the value is male or not
         
        cy.get("input[value='male']").check().should("have.value",'male')
        
        //checking visibility of female check box element
        cy.xpath("//input[@value='female']").should('be.visible');
        //checking and validate that female check box is not checked 
        cy.xpath("//input[@value='female']").should('not.be.checked')
        

       
       

      
        
    })

    it("Checking Check box",()=>{
        cy.visit("https://ultimateqa.com/simple-html-elements-for-automation/")
        cy.get("input[value='Bike']").should('be.visible').then((ele)=>{
            ele.click()
            
        })

    })
})