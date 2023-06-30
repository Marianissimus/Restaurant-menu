
describe('menu test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('can show the correct menu items by default', () => {
    cy.get('.menu-list li').should('have.length', 12)
    cy.get('.menu-list li:first .menu-preview  h1 .name').should('have.text', 'Asparagus Barbecue')
    cy.get('.menu-list li:last .menu-preview  h1 .name').should('have.text', 'White Princess')
  })

  it('can display no of items in shopping cart preview', () => {
    cy.get('.shopping-cart span:first').should('have.text', 'Empty cart')
    cy.get('.Asparagus-container .add-to-cart').click()
    cy.get('.shopping-cart span:first').should('have.text', 'Click to order')
    cy.get('#how-many-items span').should('have.text', '1')
    for (let i = 0; i < 3; i++) {
      cy.get('.Asparagus-container .add-to-cart').click()
    }
    cy.get('#how-many-items span').should('have.text', '4')
    cy.get('.shopping-cart').click()
    cy.get('.remove-item-btn').click()
    cy.get('.back-to-menu-btn:last').click()
    cy.get('#how-many-items span').should('have.text', '3')
  })

  it('can add and remove items to cart and calculate total', () => {
    for(let i = 0; i < 7; i++){
      cy.get('.Asparagus-container .add-to-cart').click()
    }
    cy.get('.shopping-cart').click()
    cy.get('#totalValue').should('have.text', '700 lei')
    cy.get('.back-to-menu-btn:first').click()
    for(let i = 0; i < 5; i++){
      cy.get('.Brownie-container .add-to-cart').click()
    }
    cy.get('#how-many-items span').should('have.text', '12')
    cy.get('.shopping-cart').click()
    cy.get('#totalValue').should('have.text', '800 lei')
    cy.get('.Asparagus-tr .remove-item-btn').click()
    cy.get('#totalValue').should('have.text', '700 lei')
    cy.get('.Brownie-tr .remove-item-btn').click()
    cy.get('#totalValue').should('have.text', '680 lei')
  })

  it('can group items inside shopping cart and show subtotals', () => {
    cy.get('.Asparagus-container .add-to-cart').click()
    cy.get('.Brownie-container .add-to-cart').click()
    cy.get('.Asparagus-container .add-to-cart').click()
    cy.get('.Brownie-container .add-to-cart').click()
    cy.get('.Asparagus-container .add-to-cart').click()
    cy.get('.shopping-cart').click()
    cy.get('.Asparagus-tr .item-times').should('have.text', '3')
    cy.get('.Asparagus-tr .item-unit-price').should('have.text', '100')
    cy.get('.Asparagus-tr .subtotal').should('have.text', '300')
    cy.get('.Brownie-tr .item-times').should('have.text', '2')
    cy.get('.Brownie-tr .item-unit-price').should('have.text', '20')
    cy.get('.Brownie-tr .subtotal').should('have.text', '40')
  })

  it('can show the correct message when no items in shopping cart', () => {
    cy.get('.shopping-cart').click()
    cy.get('.no-items h2').should('have.text', 'No menu items added yet')
    cy.get('#order-btn').should('not.exist')
    cy.get('.back-to-menu-btn:first').click()
    cy.get('.Asparagus-container .add-to-cart').click({multiple: true})
    cy.get('.shopping-cart').click()
    cy.get('#order-btn').should('exist')
    cy.get('#order-btn').click()
    cy.get('.no-items h2').should('have.text', 'Your order was recieved and reset')
  })

})
