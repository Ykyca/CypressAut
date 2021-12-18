/// <reference types='Cypress' /> 


describe("Handling checkboxes", () => {

    beforeEach(function() {

        cy.visit("http://webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

    })

    it('Check and validate checkbox', () => {
        // cy.visit("http://webdriveruniversity.com/");
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        //check the first checkbox and assert it is checked
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
        //cy.get("input[type='checkbox']").first().check().should('be.checked');

        cy.get('#checkboxes > :nth-child(1) > input').as('firstCheckbox');
        cy.get('@firstCheckbox').check().should('be.checked');

       
    })

    it('Check all or multiple checkboxes on the page', () => {
       cy.get('[type="checkbox"]').check().should('be.checked');
       cy.reload();
       cy.get("input[type='checkbox']").check(['option-2', 'option-1', 'option-3', 'option-4']).should('be.checked');
       

    })

    it('Uncheck already checked checkbox', () => {
        cy.get("input[type='checkbox']").uncheck('option-3').should('not.be.checked');

      /*
       cy.get(':nth-child(5) > input').as("thirdCheckBox");
       cy.get('@thirdCheckBox').uncheck().should('not.be.checked')
      */ 

    })
    
    

})