describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Add Customer')
    // cy.contains('sandbox app is running!')
  })
})
