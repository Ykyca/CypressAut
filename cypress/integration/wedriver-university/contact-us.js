/// <reference types="Cypress" />
                       
describe("Test Contact US form via WebdriverUniversity", () => {

    before(function(){
        cy.fixture('example').then(function (data) {
           this.data=data;
        })
    })


    it("Should be able to submit a successful submission via contact us form", function () {
        //cy.visit("http://webdriveruniversity.com/");
        //cy.get('#contact-us >').click({force: true});
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html"); 

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver');
        // cy.title().should('eq', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');


        cy.get('[name="first_name"]').type(this.data.first_name); 
        cy.get('[name="last_name"]').type(this.data.last_name);
        cy.get('[name="email"]').type(this.data.email);
        cy.get('textarea.feedback-input').type("This is a happy flow test for submitting a contact-us form");
        cy.get('[type="submit"]').click();

        cy.get('h1').should('have.text', 'Thank You for your Message!');

    
    })

    it("Should not be able to submit a successful submission as all fields are required", function () {
        //cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html"); //da navigiramo postepeno, zaobilzaeci new tab problem
        cy.visit("http://webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', "target").click({force:true});
        cy.get('[name="first_name"]').type(this.data.first_name);
        cy.get('[name="last_name"]').type(this.data.last_name);
        cy.get('textarea.feedback-input').type("This is NOT a happy flow test for submitting a contact-us form");
        cy.get('[type="submit"]').click();

        cy.get('body').contains('Error: all fields are required');
        cy.get('body').contains('Error: Invalid email address');

        
    })
})
