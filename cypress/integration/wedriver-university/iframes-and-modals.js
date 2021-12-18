/// <reference types='Cypress' /> 

describe("Handling iFrames and Modals", () => {

    it('iFrame and Modal', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true });

        //iframe
        cy.get('#frame').then($frame => {
            const frameBody = $frame.contents().find('body');
            cy.wrap(frameBody).as('iframe');
        })

        cy.get('@iframe').find('#button-find-out-more').click(); //modal opens up

        //verify modal's text
        cy.get('@iframe').find('#myModal').as('modal');

        cy.get('@modal').should(($expectedText) => {
            const expText = $expectedText.text();
            expect(expText).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras');
        })

        //click on the Close btn of the modal (we will do it according to btn text)
        cy.get('@modal').contains('Close').click();

    

    })
})