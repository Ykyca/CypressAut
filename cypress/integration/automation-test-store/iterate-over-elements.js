/// <reference types='Cypress' />

describe("Iterate over elements", () => {

    before(function() {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    })

    it("Log information of all hair care products-list of products", () => {
        
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => { //locationg all headers and iterationg each header (element, index and list are yielded to be used below)

            cy.log("Index is: " + index + " . Element is: " + $el.text()); //logging the index of each iteration + extracting text with jquery text()


        })

    })


    //iterate and click on an element based on text
    it("Add specific product to basket-selecting it from element iteration", () => {

        cy.selectProduct('Curls to straight Shampoo');

    })







})