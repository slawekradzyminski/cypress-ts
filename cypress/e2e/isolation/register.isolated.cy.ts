/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { registerMocks } from "../../mocks/registerMocks"
import { registerPage } from "../../pages/registerPage"

describe('Register page tests', () => {
    beforeEach(() => {
      cy.visit('/register')
    })
  
    it('should register successfully', () => {
      // given
      const user = getRandomUser()
      registerMocks.mockSuccess()

      // when
      registerPage.attemptRegister(user)
  
      cy.url().should('contain', 'login')
      cy.get('.alert-success').should('have.text', 'Registration successful')
    })
  
  })
  