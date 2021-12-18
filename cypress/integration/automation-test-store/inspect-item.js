/// <reference types="Cypress" />
                       
describe("Inspect items using chain of commands", () => {

    beforeEach(function () {
        cy.visit("https://automationteststore.com/");

    })

    it("Click on the first item using header- cypress playground generated locator", () => {
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();
                
    })

    it("Click on the first item using text", () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();

        // cy.get('.fixed_wrapper').contains('Skinsheen Bronzer Stick').click();
        // cy.get('.fixed').contains('Skinsheen Bronzer Stick').click();
                
    })

    it("Click on the first item using index", () => {
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();

        // cy.get('.thumbnails').find('.prdocutname').eq(0).click();
        // cy.get('.fixed').find('.prdocutname').eq(0).click();
        
    })

    it("Managing non-cypress code using then command", () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemText) {
            console.log("This is the text retrieved from the yielded element, now subject: " + itemText.text());
        })
        
        console.log("This is written last but will be executed first")
                
    })
})