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
  
    it('should logout', () => {
        // when
        homePage.clickLogout()

        // then
        cy.url().should('contain', 'login')
    })

    it('should open add more page', () => {
        // when
        homePage.clickAddMore()

        // then
        cy.url().should('contain', 'add-user')
    })
  
  })
  