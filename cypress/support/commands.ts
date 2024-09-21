Cypress.Commands.add('login', (username: string, password: string) => { 
    cy.visit('/')
    cy.get('.form-control').eq(0).type(username)
    cy.get('.form-control').eq(1).type(password)
    cy.get('.btn-primary').click()
 })