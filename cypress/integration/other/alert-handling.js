/// <reference types='Cypress' /> 

describe("Alerts handling by Cypress", () => {

    before(function() {

        cy.visit("http://webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
    })

    it('Confirm alert contains the correct text', () => {
       

        cy.get('#button1').click();
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am an alert box!');
        })
    })

    it('Confirm that js confirm alert box works as expected when clicking OK', () => {
    

        cy.get('#button4').click();
        cy.on('window:confirm', (text) => {
            return true;
        })

        cy.get('#confirm-alert-text').contains('You pressed OK!');

    })

    it('Confirm that js confirm alert box works as expected when clicking Cancel', () => {
   

        cy.get('#button4').click();
        cy.on('window:confirm', (text) => {
            return false;
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!');

    })

    it('Confirm js confirm alert box using a stub ', () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        const stub = cy.stub();
        cy.on('window:confirm', stub);

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
         }).then(()=> {
            return true;
        }).then(()=> {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })

    })

    // NE RADI!!!
    // it('Cancel js confirm alert box using a stub ', () => {
    //     cy.visit("http://webdriveruniversity.com/");
    //     cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

    //     const stub = cy.stub();
    //     cy.on('window:confirm', stub);

    //     cy.get('#button4').click().then(() => {
    //         expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    //     }).then((str) => { 
    //         return false;

    //     }).then(()=> {
    //         cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    //     })

    // })
})