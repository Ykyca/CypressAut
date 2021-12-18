/// <reference types='Cypress' />

describe("Alias and Invoke", () => {

    beforeEach(function() {
        cy.visit("https://automationteststore.com/");
    })

    it("Validate title of the specific hair care product", () => {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        //verify that the first element has a corrcet title
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('firstProductThumbnail'); // extract the text of
        // element that is first displayed and save it as alias using the alias command-as
        //now we use it as alias ('@statedalias') instead of typing the whole command
        cy.get('@firstProductThumbnail').its('length').should('be.gt', 5); //using chai verify that the text lenght is
        // greater than 5
        cy.get('@firstProductThumbnail').should('include', 'Seaweed Conditioner');//verify that the text includes 
        //the expected name the producet
        cy.get('@firstProductThumbnail').should('contain', 'Seaweed Conditioner');

        //we used .invoke('text') to extract a text from an element- it is similar to jquery .text()
        //we can use both, but .invoke() command is a cypress method. we saved that into alias, and after
        //we were able to use alias several times-not only it saves time but it reduces code!

    })

    it("Verify number of products on Home page", () => {
        cy.get('div.thumbnail').as('homePageProducts');
        cy.get('@homePageProducts').its('length').should('eq', 16);
        //bolje ovako za duzinu
        cy.get('@homePageProducts').should('have.length', 16);

        //weather the add to cart icons contain the correct title
        cy.get('@homePageProducts').find('.productcart').should('have.attr', 'title', 'Add to Cart');//the ones
        //that our out of stock, doesn't have the icon, they are 13 in total
        //assert taj ali uz invoke
        cy.get('@homePageProducts').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    })

    it("Calculate total of prices (both normal and non sale)", () => {
        
        cy.get('div.thumbnail').as('homePageProducts');

        //find all products and iterate through those who have normal prices (exclude the sale prices)
        //   cy.get('@homePageProducts').find('.oneprice').each(($el, index, $list) => {
        //       cy.log($el.text()); // just for purpose of schecking are we getting what we want->
        // extract the non sale prices, including $
        //   })
        //we can do the same as above and exclude $ using: alias, invoke, promise, for loop and split
        //1. get all non sale prices using invoke text and save them in an alias
        cy.get('div.thumbnail').find('.oneprice').invoke('text').as('nonSalePrices');
        //dopuna1, nadji sales prices
        cy.get('div.thumbnail').find('.pricenew').invoke('text').as('salePrices');


        var overAllTotal=0;
        //2. make a promise on that alias, which yealds the alias (text)
        cy.get("@nonSalePrices").then($linkText => {
            //save all the prices in an array and split it on $; $ will be deleted-> in the callback function
            var itemNonSalePrices = $linkText.split('$');
            //log all the values using for loop, iterating through all the values saved to the arrey of prices
            var i;
            var nonSaleTotal=0;
            for (i = 0; i < itemNonSalePrices.length; i++) {
                cy.log(itemNonSalePrices[i]);
                //let's now calculate the total of nonSale items
                nonSaleTotal+=Number(itemNonSalePrices[i]); //Number() converts String to number
            }
            overAllTotal+=nonSaleTotal;
            cy.log('nonSale ptice total is: ' + overAllTotal);

        })

        //dopuna 2., saberi sve sales prices i dodaj ih overallTotal-u
        cy.get('@salePrices').then($linkText => {
            var itemSalePrices = $linkText.split('$');
            var i;
            var saleTotal=0;
            for (i=0; i<itemSalePrices.length; i ++) {
                cy.log(itemSalePrices[i]);
                saleTotal+=Number(itemSalePrices[i]);
            }
            cy.log('Sale total is: ' + saleTotal);
            overAllTotal+=saleTotal;
            cy.log('The overall total price is:' + overAllTotal);

            //expect(overAllTotal).to.be.equal(648.5); AKO OVO URADIMO OVDE, BICE ASINHRONO, ZATO DODAJ THEN POSLE BLOKA

        }).then(() => {
            expect(overAllTotal).to.be.equal(648.5);
        })
    })









})