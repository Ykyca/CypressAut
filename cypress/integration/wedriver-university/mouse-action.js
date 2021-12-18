/// <reference types='Cypress' /> 

describe("Testing mouse actions", () => {

    before(function() {
        cy.visit("http://webdriveruniversity.com/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
    })

    // it('Scroll into view', () => {
        //Sve je prebceno u before hook
    //     cy.visit("http://webdriveruniversity.com/");
    //     cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
    // })

    it('Verify Drag and drop of a dragabble object', () => {

        cy.get('#draggable').trigger('mousedown', {which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});

    })

    it('Verify double clicking on an element', () => {
       
        cy.get('#double-click').dblclick();
        //assertion missing


    })

    it('Verify click and hold action on an element', () => {
     
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($el) => {
            expect($el).to.have.css('background-color','rgb(0, 255, 0)').and.to.have.text('Well done! keep holding that click now.....');
        })
        


    })



}) 
