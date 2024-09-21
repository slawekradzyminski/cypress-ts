import { User } from "../types/registerTypes"
import { getRandomUser } from "../generators/userGenerator"
import { editPage } from "../pages/editPage"
import { homePage } from "../pages/homePage"

describe('Edit page tests', () => {
  let user: User

    beforeEach(() => {
      user = getRandomUser()
      cy.log(JSON.stringify(user, null, 2))
      cy.register(user)
      cy.login(user.username, user.password)
      cy.visit('/')
      cy.getCookie('token').then(cookie => cy.wrap(cookie?.value).as('jwtToken'))
    })
  
    it('should correctly autocomplete users data', () => {
      // given
      homePage.clickEditOnUser(user)
      
      // then
      editPage.verifyAutocomplete(user)
    })

    it('should successfully edit', () => {
      // given
      const newUserData = getRandomUser()
      homePage.clickEditOnUser(user)
      
      // when
      editPage.editUserWith(newUserData)

      // then
      cy.get('ul li').should('contain.text', `${newUserData.firstName} ${newUserData.lastName}`)
      cy.get('ul li').should('not.contain.text', `${user.firstName} ${user.lastName}`)
      cy.get('.alert-success').should('have.text', 'Updating user successful')

      cy.get('@jwtToken').then(token => {
        cy.request({
          method: 'GET',
          url: `${Cypress.env('backendUrl')}/users/${user.username}`,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(response => {
          expect(response.body.firstName).to.equal(newUserData.firstName)
          expect(response.body.lastName).to.equal(newUserData.lastName)
          expect(response.body.email).to.equal(newUserData.email)
          expect(response.body.username).to.equal(user.username)
          expect(response.body.roles).to.deep.equal(user.roles)
        })
      })
    })
  
  })
  