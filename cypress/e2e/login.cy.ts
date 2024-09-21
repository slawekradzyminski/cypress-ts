/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"

describe('Login page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully', () => {
    // given - setup testu
    const user = getRandomUser()
    cy.log(JSON.stringify(user, null, 2))
    cy.request({
      method: 'POST',
      url: 'http://localhost:4001/users/signup',
      body: user
    })

    // when - testowana akcja
    cy.get('.form-control').eq(0).type(user.username)
    cy.get('.form-control').eq(1).type(user.password)
    cy.get('.btn-primary').click()

    // then - asercje
    cy.get('h1').should('contain.text', user.firstName)
  })

  it('should fail to login', () => {
    cy.get('.form-control').eq(0).type('adminek')
    cy.get('.form-control').eq(1).type('adminek')
    cy.get('.btn-primary').click()

    cy.get('.alert-danger').should('have.text', 'Invalid username/password supplied')
  })

})
