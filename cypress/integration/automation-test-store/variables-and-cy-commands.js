/// <reference types="Cypress" />

describe("Inspect items using chain of commands", () => {

    //impleemnt a hook for code reduction

    it("Navigate to a specific page", () => {
        cy.visit("https://automationteststore.com/");

        //  This is recommended approach and it will work
        cy.get('a[href*="product/category&path="]').contains("Skincare").click();
        cy.get('a[href*="product/category&path="]').contains("Makeup").click();

    })

    it("How to use constant: verifying a text of an element", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains("Makeup").click();

        /* This code will finally, instead use Promises
        const header = cy.get("h1 .maintext");
        cy.log(header.text()); //text is not a function
        cy.log(header); //we will log some objects which is not what we wanted to do
        */

        cy.get("h1 .maintext").then(($headerTextY) => {
            const headerText = $headerTextY.text();
            cy.log("The value extracted from the header is: " + headerText); //this will execute after the below assertion
            //chai expect assertion
            expect(headerText).is.eq('Makeup')
        })
    })


    it.only("Validate properties of the Contact us page- 3 different approaches", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");

        //1. approach: CYPRESS COMMANDS AND CHAINING
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');
    
        //2. approach: JQUERY APPROACH COMBINED WITH CYPRESS
        cy.contains("#ContactUsFrm", "Contact Us Form").then(text => { 
            const firstNameLabelText = text.find('#field_11').text() //this is jquery find and jquery text commands
            expect(firstNameLabelText).to.contain('First name');
        }) 

        //3. approcah: CLOSURES (embeded commands)
           //if we use jquery methods, it is good approach to use promises also
           cy.contains("#ContactUsFrm", "Contact Us Form").then(text => { //use text to perform other validations using jquery library
            //and in order to handle the order of execution (so we can mix cypress, jquery and the rest)
            const firstNameLabelText = text.find('#field_11').text() 
            expect(firstNameLabelText).to.contain('First name');
            //EBEDDED COMMAND (another closure): we can use then again if we already used it
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text()); 
                cy.log(fnText); //logs the html part of the code - prints the element itself
            })

        }) 

    })

})



