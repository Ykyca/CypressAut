/// <reference types='Cypress' /> 

describe("Handling radio buttons", () => {

    before(function () {

        cy.visit("http://webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

    })

    it('Check specific radio buttons', () => {
       
        cy.get('#radio-buttons').find('[type=radio]').first().check();
        cy.get('#radio-buttons').find('[type=radio]').eq(4).check();
       
    })

    it('Validate states of radio buttons', () => {
    
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        cy.get("[value='cabbage']").should('be.disabled');


        cy.get("[value='lettuce']").check().should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');
        cy.get("[value='cabbage']").should('be.disabled');

       
    })

   

})