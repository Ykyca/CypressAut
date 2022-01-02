/// <reference types="Cypress" />
                       
describe("Test Contact US form via WebdriverUniversity", () => {

    beforeEach(function(){ 
        cy.fixture('example').then(function (data) {
           this.data=data;
        })

        cy.visit("http://webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', "target").click({force:true});

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver');
        // cy.title().should('eq', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
    })


    it("Should be able to submit a successful submission via contact us form", function () {
        cy.
        webdriverUni_ContactUsForm_Submission(
            this.data.first_name, 
            this.data.last_name, 
            this.data.email, 
            "This is a happy flow test for submitting a contact-us form",
            'h1',
            'Thank You for your Message!'
            )
    
    })

    it("Should not be able to submit a successful submission as all fields are required", function () {
        cy.
        webdriverUni_ContactUsForm_Submission(
            this.data.first_name,
            this.data.last_name,
            ' ',
            "This is NOT a happy flow test for submitting a contact-us form",
            'body',
            'Error: Invalid email address'
        )
        
    })
})
