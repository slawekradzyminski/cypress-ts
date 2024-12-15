import { User } from "../types/registerTypes";
import { faker } from '@faker-js/faker';
import { Role } from "../types/roles";

const getValidString = (generator: () => string, minLength = 4): string => {
    const maxAttempts = 20;
    let attempts = 0;
    let value = generator();
    
    while (value.length < minLength && attempts < maxAttempts) {
        value = generator();
        attempts++;
    }
    
    return value.length >= minLength ? value : value + '0'.repeat(minLength - value.length);
};

export const getRandomUser = (): User => {
    return {
        username: getValidString(() => faker.internet.userName()),
        password: getValidString(() => faker.internet.password()),
        firstName: getValidString(() => faker.person.firstName()),
        lastName: getValidString(() => faker.person.lastName()),
        email: faker.internet.email(),
        roles: [Role.ROLE_ADMIN, Role.ROLE_CLIENT]
    }
}