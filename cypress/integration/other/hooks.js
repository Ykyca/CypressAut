/// <reference types='Cypress' />

before(() => {
    // root-level hook
    // runs once before all tests
    cy.log("OUTSIDE root-level; runs once before all tests");
  })
  
  beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.log("OUTSIDE root-level; runs before every test block");

  })
  
  afterEach(() => {
    // runs after each test block
    cy.log("OUTSIDE runs after each test block");

  })
  
  after(() => {
    // runs once all tests are done
    cy.log("OUTSIDE runs once all tests are done");
  })
  
  describe('Hooks', () => {
    before(() => {
      // runs once before all tests in the block
      cy.log("runs once before all tests in the block")
    })
  
    beforeEach(() => {
      // runs before each test in the block
      cy.log("runs before each test in the block")

    })
  
    afterEach(() => {
      // runs after each test in the block
      cy.log("runs after each test in the block")

    })
  
    after(() => {
      // runs once after all tests in the block
      cy.log("runs once after all tests in the block")

    })

    it("Example test 1", ()=> {
        cy.log("Example test 1")
    })

    it("Example test 2", ()=> {
        cy.log("Example test 2")
    })
  })
  







