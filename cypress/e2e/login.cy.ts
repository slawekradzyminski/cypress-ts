/// <reference types="cypress" />

describe('Login page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully', () => {
    cy.get('.form-control').eq(0).type(Cypress.env('login'))
    cy.get('.form-control').eq(1).type(Cypress.env('password'))
    cy.get('.btn-primary').click()

    cy.get('h1').should('contain.text', 'Slawomir')
  })

  it('should fail to login', () => {
    cy.get('.form-control').eq(0).type('adminek')
    cy.get('.form-control').eq(1).type('adminek')
    cy.get('.btn-primary').click()

    cy.get('.alert-danger').should('have.text', 'Invalid username/password supplied')
  })

})
