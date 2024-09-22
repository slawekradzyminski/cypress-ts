/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"
import { registerPage } from "../pages/registerPage"

describe('Register page tests', () => {
  beforeEach(() => {
    cy.visit('/register')
  })

  it('should register successfully', () => {
    // given
    const user = getRandomUser()

    // when
    registerPage.attemptRegister(user)

    // then
    cy.url().should('contain', 'login')
    cy.get('.alert-success').should('have.text', 'Registration successful')
  })

})
