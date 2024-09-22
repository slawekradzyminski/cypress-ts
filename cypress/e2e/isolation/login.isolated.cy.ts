/// <reference types="cypress" />

import { getRandomUserWithFirstName } from "../../generators/userGenerator"
import { loginPage } from "../../pages/loginPage"
import { loginMocks } from "../../mocks/loginMocks"
import { usersMocks } from "../../mocks/usersMocks"

describe('Login page tests is isolation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully', () => {
    // given
    const firstName = 'Slawomir'
    const user = getRandomUserWithFirstName(firstName)
    loginMocks.mockSuccess(user)
    usersMocks.mockSuccess()
    
    // when
    loginPage.attemptLogin(user.username, user.password)

    // then
    cy.get('h1').should('contain.text', firstName)
  })

  it('should fail to login', () => {
    // given
    const errorMessage = 'Invalid username/password supplied'
    loginMocks.mockFailure(errorMessage)
    const username = 'wrong'
    const password = 'wrong'

    // when
    cy.get('.form-control').should('have.length', 2)
    cy.percySnapshot('LoginPage')
    loginPage.attemptLogin(username, password)

    // then
    cy.get('.alert-danger').should('have.text', errorMessage)
    cy.wait('@loginRequest').then((intercept) => {
      expect(intercept.request.body).to.deep.equal({
       username: username,
        password: password
      })
    })
  })

  it('should open register page', () => {
    // when
    loginPage.clickRegister()

    // then
    cy.url().should('contain', 'register')
    cy.get('.form-control').should('have.length', 5)
    cy.percySnapshot('RegisterPage')
  })

})
