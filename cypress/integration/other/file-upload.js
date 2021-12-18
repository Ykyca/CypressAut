/// <reference types='Cypress' /> 

describe("Uploading a png file", () => {

    before(function() {
        cy.visit("http://webdriveruniversity.com/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });
    })

    it('Verify upload is not being processed when no file is provided for uploading', () => {
    

        cy.get('#submit-button').click();
     //MAKE AN ASSERTION OF THE ALERT- MANAGE IT ANUALLY!!!

    })

    it('Verify png file is uploaded successfully', () => {
       
        cy.fixture('laptop.png', 'base64').then(fileContent => {

            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"

                },
                {
                    uploadType: "input" 
                }

            )

        })
        cy.get('#submit-button').click();
        cy.url().should('include', 'filename=laptop.png');
    })
})