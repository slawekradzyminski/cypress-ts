import { User } from "../types/registerTypes";
import { faker } from '@faker-js/faker';
import { Role } from "../types/roles";

export const getRandomUser = (): User => {
    return getRandomUserWithFirstName(faker.person.firstName())
}

export const getRandomUserWithFirstName = (firstName: string): User => {
    return {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        firstName: firstName,
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        roles: [Role.ROLE_ADMIN, Role.ROLE_CLIENT]
    }
}