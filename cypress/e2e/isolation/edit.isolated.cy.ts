import { getRandomUser } from "../../generators/userGenerator"
import { editPage } from "../../pages/editPage"
import { homePage } from "../../pages/homePage"
import users from "../../fixtures/users.json"
import { CommonUserFields } from "../../types/userTypes"
import { editMocks } from "../../mocks/editMocks"

describe('Edit page tests', () => {
  const user = users[3] as CommonUserFields

    beforeEach(() => {
      cy.enterHomePageInIsolation()
      homePage.clickEditOnUser(user)
    })
  
    it('should correctly autocomplete users data', () => {
      // then
      editPage.verifyAutocomplete(user)
      cy.percySnapshot('EditPage')
    })

    it('should successfully edit', () => {
      // given
      const newUserData = getRandomUser()
      editMocks.mockSuccess(user.username)
      
      // when
      editPage.editUserWith(newUserData)

      // then
      cy.get('.alert-success').should('have.text', 'Updating user successful')
      cy.wait('@editRequest').then((intercept) => {
        expect(intercept.request.body).to.deep.equal({
          firstName: newUserData.firstName,
          lastName: newUserData.lastName,
          email: newUserData.email,
          roles: user.roles,
          username: user.username
        })
      })
    })
  
  })
  