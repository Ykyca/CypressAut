/// <reference types="Cypress" /> 

describe("Handling browser navigation", () => {
 
    it("Verify HomePage links", () => {

        cy.visit("http://webdriveruniversity.com/");
        cy.get("#contact-us").invoke("removeAttr", "target").click({force:true});

        cy.url().should('include','/contactus');

        cy.go('back');
        cy.url().should('include','http://webdriveruniversity.com/');
        cy.url().should('not.include','/contactus');

        cy.reload();
        //cy.reload(true);

        cy.go('forward');
        cy.url().should('include','/contactus');

        cy.go('back');
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', '/Login-Portal');

        cy.go('back');
        cy.url().should('include','http://webdriveruniversity.com/');
        cy.url().should('not.include','/Login-Portal');

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true});
        cy.url().should('include', '/To-Do-List');

        cy.go('back');
        cy.url().should('include','http://webdriveruniversity.com/');
        cy.url().should('not.include','/To-Do-List');


    })



})