describe("XPath Selector",()=>{


    it("find no of products",()=>{
        // visiting the site
        cy.visit("http://www.automationpractice.pl/index.php")
        //finding Best seller filed using xapth
        cy.xpath("//a[text()='Best Sellers']").click()

        //assertion to check the total number of product is equal to 6
cy.xpath("//*[@class='product-image-container']").should("have.length",6)


        
    })
})