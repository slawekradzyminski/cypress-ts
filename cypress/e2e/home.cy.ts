describe('Home page tests', () => {
    beforeEach(() => {
        cy.login(Cypress.env('login'), Cypress.env('password'))
        cy.visit('/')
        cy.getCookie('token').then(cookie => cy.wrap(cookie?.value).as('jwtToken'))
    })
  
    it('should display at least one user', () => {
        cy.get('ul li').should('have.length.at.least', 1)
    })
  
    it('should logout', () => {
        cy.get('#logout').click()
        cy.url().should('contain', 'login')
    })

    it('should open add more page', () => {
        cy.get('#addmore').click()
        cy.url().should('contain', 'add-user')
    })
  
  })
  