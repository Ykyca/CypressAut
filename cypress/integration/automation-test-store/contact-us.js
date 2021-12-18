/// <reference types="Cypress" />

//FIXTURES AND ALIASES DON't work  . VIDI STACCES S OVIM
describe("Test Contact Us form via AutomationTestStore", () => {

    before(function ()  {
        cy.fixture('userDetails').as('user');
    })

    it("Should be able to submit a successful submission via contact us form", function () {
        cy.visit("https://automationteststore.com");
        //cy.xpath("//a[contains(@href,'contact')]").click();
        cy.get("a[href$='contact']").click().then(function(linkText) {
            // console.log("This is the text of the clicked link: " + linkText.text()); //this will be displayed in Console
            cy.log("This is the text of the clicked link: " + linkText.text()); //this will be displayed in cypress runner log
        })

        cy.get('@user').then(function (user) {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            //cy.get('#ContactUsFrm_email').type(this.user.email);

        })

          
       
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type("Do you give a discount on 100+ orders?");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
    })
})
