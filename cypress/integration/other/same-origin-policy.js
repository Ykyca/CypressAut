/// <reference types="Cypress" /> 

describe("Testing same origin policy- superdomain Cypress limitation", () => {

    it("Using cy.visit()", () => {
        cy.visit("https://automationteststore.com/");
        cy.visit("http://webdriveruniversity.com/");

    })

    it("By clcking on a link which redirects to different superdomain", () => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#automation-test-store").invoke("removeAttr", "target").click();

    })
} )


//both tests fail on all browsers if chrome security is set to default (: true)
//chrome, edge, electron: if we set chromeWebSecurity to false in the config file (cypress.json): 
//1.will fail (will be possible in future); 2. will pass