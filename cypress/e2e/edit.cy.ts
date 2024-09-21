import { User } from "../../types/registerTypes"
import { getRandomUser } from "../generators/userGenerator"
import { homePage } from "../pages/homePage"

describe('Edit page tests', () => {
  let user: User

    beforeEach(() => {
      user = getRandomUser()
      cy.log(JSON.stringify(user, null, 2))
      cy.register(user)
      cy.login(user.username, user.password)
      cy.visit('/')
    })
  
    it('should edit', () => {
      // given
      homePage.clickEditOnUser(user)
      
      // open edit page
    })
  
  })
  