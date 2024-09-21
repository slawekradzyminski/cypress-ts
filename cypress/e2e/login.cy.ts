/// <reference types="cypress" />

import { getRandomUser } from "../generators/userGenerator"
import { loginPage } from "../pages/loginPage"

describe('Login page tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully', () => {
    // given
    const user = getRandomUser()
    cy.log(JSON.stringify(user, null, 2))
    cy.register(user)

    // when
    loginPage.attemptLogin(user.username, user.password)

    // then
    cy.get('h1').should('contain.text', user.firstName)
  })

  it('should fail to login', () => {
    // when
    loginPage.attemptLogin('wrong', 'wrong')

    // then
    cy.get('.alert-danger').should('have.text', 'Invalid username/password supplied')
  })

  it('should open register page', () => {
    // when
    loginPage.clickRegister()

    // then
    cy.url().should('contain', 'register')
  })

})
