import { homePage } from "../../pages/homePage"
import users from "../../fixtures/users.json"

describe('Home page tests in isolation', () => {
    beforeEach(() => {
        cy.enterHomePageInIsolation()
    })

    it('should display all users', () => {
        // then
        cy.get('ul li').should('have.length', users.length)
        cy.get('ul li').each(($el, i) => {
            expect($el.text()).to.contain(`${users[i].firstName} ${users[i].lastName}`)
        })
        cy.percySnapshot('HomePage')
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
