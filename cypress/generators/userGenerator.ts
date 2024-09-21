import { User } from "../types/registerTypes";
import { faker } from '@faker-js/faker';
import { Role } from "../types/roles";

export const getRandomUser = (): User => {
    return {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        roles: [Role.ROLE_ADMIN, Role.ROLE_CLIENT]
    }
}