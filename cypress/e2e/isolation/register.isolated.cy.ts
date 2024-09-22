/// <reference types="cypress" />

import { getRandomUser } from "../../generators/userGenerator"
import { registerMocks } from "../../mocks/registerMocks"
import { registerPage } from "../../pages/registerPage"
import { Role } from "../../types/roles"

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
  
      // then
      cy.url().should('contain', 'login')
      cy.get('.alert-success').should('have.text', 'Registration successful')
      cy.wait('@registerRequest').then((intercept) => {
        expect(intercept.request.body).to.deep.equal({
            ...user,
            roles: [Role.ROLE_CLIENT]
        })
      })
    })
  
  })
  