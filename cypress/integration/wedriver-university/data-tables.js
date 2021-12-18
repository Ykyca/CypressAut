/// <reference types="Cypress" />

describe("Handling table data", () => {
   
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })
    
    
    it("Verify total age of users from the table", () => {
        
        var tableCells = [];
        let number =0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {

            tableCells[index] = $el.text();

        }).then(() => {

            var i;
            for (i=0; i < tableCells.length; i++) {
                if(Number(tableCells[i])) {
                    //in js this will append all the numbers
                   // number+=tableCells[i]; --> 0459420275680
                   number+=Number(tableCells[i]);
                }
            }
            //cy.log("The total age of the users is: " + number);
            //expect(number).to.be.equal(322);
        }).then(() => {
            cy.log("The total age of the users is: " + number);
        }).then(() => {
            expect(number).to.be.equal(322);
        })
            
        })
        

        it("Assert the age of a specific user based on its last name", () => {

            cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, list) => {
                const cellText = $el.text();
                if(cellText.includes('Woods')) {
                    cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                        const userAge =age.text();
                        expect(userAge).to.equal("80");
                    })
                }
            })
        })

       

    });
    
   
