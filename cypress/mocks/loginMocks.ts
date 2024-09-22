import { FailedLoginResponse } from "../types/loginTypes"
import { User } from "../types/registerTypes"
import { loginResponseFrom } from "../utils/loginResponseUtil"

export const loginMocks = {

    mockSuccess: (user: User) => {
        cy.intercept('POST', '**/users/signin', {
            statusCode: 200,
            body: loginResponseFrom(user)
        })
    },

    mockFailure: (errorMessage: string) => {
        cy.intercept('POST', '**/users/signin', {
            statusCode: 422,
            body: getFailedLoginBody(errorMessage)
        })
    }

}

const getFailedLoginBody = (errorMessage: string): FailedLoginResponse => {
    return {
        timestamp: "2024-09-22T06:40:18.370+00:00",
        status: 422,
        error: "Unprocessable Entity",
        message: errorMessage,
        path: "/users/signin"
    }
}