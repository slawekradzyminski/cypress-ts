/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { loginPage } from "../../pages/loginPage"
import { loginResponseFrom } from "../../utils/loginResponseUtil"

describe('Login page tests is isolation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it.only('should login successfully', () => {
    // given
    const user = getRandomUser()
    cy.intercept('POST', '**/users/signin', {
      statusCode: 200,
      body: loginResponseFrom(user)
    })
    cy.intercept('GET', '**/users', { fixture: 'users.json' })

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
