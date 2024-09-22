/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { loginPage } from "../../pages/loginPage"
import { loginResponseFrom } from "../../utils/loginResponseUtil"
import users from "../../fixtures/users.json"
import { loginMocks } from "../../mocks/loginMocks"
import { usersMocks } from "../../mocks/usersMocks"

describe('Login page tests is isolation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should login successfully', () => {
    // given
    const user = getRandomUser()
    loginMocks.mockSuccess(user)
    usersMocks.mockSuccess()
    
    // when
    loginPage.attemptLogin(user.username, user.password)

    // then
    cy.get('h1').should('contain.text', user.firstName)
    cy.get('ul li').should('have.length', users.length)
    cy.get('ul li').each(($el, i) => {
      expect($el.text()).to.contain(`${users[i].firstName} ${users[i].lastName}`)
    })
  })

  it('should fail to login', () => {
    // given
    const errorMessage = 'Invalid username/password supplied'
    loginMocks.mockFailure(errorMessage)

    // when
    loginPage.attemptLogin('wrong', 'wrong')

    // then
    cy.get('.alert-danger').should('have.text', errorMessage)
  })

  it('should open register page', () => {
    // when
    loginPage.clickRegister()

    // then
    cy.url().should('contain', 'register')
  })

})
