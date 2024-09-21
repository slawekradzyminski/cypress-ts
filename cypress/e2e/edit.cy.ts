import { User } from "../../types/registerTypes"
import { getRandomUser } from "../generators/userGenerator"

describe('Edit page tests', () => {
  let user: User

    beforeEach(() => {
      user = getRandomUser()
      cy.register(user)
      cy.login(user.username, user.password)
      cy.visit('/')
    })
  
    it('should edit', () => {
      // given
      
      // open edit page
    })
  
  })
  