import { homePage } from "../pages/homePage"

describe('Home page tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('login'), Cypress.env('password'))
        cy.visit('/')
        cy.getCookie('token').then(cookie => cy.wrap(cookie?.value).as('jwtToken'))
    })
  
    it('should display at least one user', () => {
        // then
        cy.get('ul li').should('have.length.at.least', 1)
    })
  
  })
  