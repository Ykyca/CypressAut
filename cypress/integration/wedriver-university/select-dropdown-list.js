/// <reference types='Cypress' /> 

describe("Interact with dropdown lists", () => {

    beforeEach(function() {
        cy.visit("http://webdriveruniversity.com/");

    })

    it('Select specific values from a dropdown list', () => {
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#'); //based on attribute value
        cy.get('#dropdowm-menu-2').select('testng').contains('TestNG');
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery'); //based on text value
        cy.get('#dropdowm-menu-3').select('JQuery').should('have.value', 'jquery'); //based on text value


        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven');
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');


    })

    it('Select specific item from the AUTOCOMPLETE dropdown list', () => {
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#myInput').type('A');

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const itemText = $el.text();
            const desiredText = 'Avacado';

            if (itemText === desiredText) {
                //$el.click();
                cy.wrap($el).as('item');
                cy.get('@item').click();

                cy.get('#submit-button').click();
                cy.url().should('include', '='+ desiredText);
            }
        }).then(() => {
            cy.get('#myInput').type('G');
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {

                const itemText = $el.text();
                const desiredText = 'Grapes';

                if (itemText === desiredText) {
                    //$el.click();
                    cy.wrap($el).as('item');
                    cy.get('@item').click();

                    cy.get('#submit-button').click();
                    cy.url().should('include', '='+ desiredText);
                }

              
            })


        })


    })


}) 
