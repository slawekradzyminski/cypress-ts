import { User } from "../types/registerTypes";
import { faker } from '@faker-js/faker';
import { Role } from "../types/roles";

export const getRandomUser = (): User => {
    let firstName = "";
    let attemptCount = 0;
    const maxAttempts = 20;

    while (firstName.length < 4 && attemptCount < maxAttempts) {
        firstName = faker.person.firstName();
        attemptCount++;
    }

    if (firstName.length < 4) {
        firstName = "John";
    }

    return getRandomUserWithFirstName(firstName);
}

export const getRandomUserWithFirstName = (firstName: string): User => {
    let username = "";
    let password = "";
    let lastName = "";
    let attemptCount = 0;
    const maxAttempts = 20;

    while ((username.length < 4 || password.length < 4 || lastName.length < 4) && attemptCount < maxAttempts) {
        username = faker.internet.userName();
        password = faker.internet.password();
        lastName = faker.person.lastName();
        attemptCount++;
    }

    if (username.length < 4) username = "defaultUser";
    if (password.length < 4) password = "defaultPass";
    if (lastName.length < 4) lastName = "Nowak";

    return {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: faker.internet.email(),
        roles: [Role.ROLE_ADMIN, Role.ROLE_CLIENT]
    };
}