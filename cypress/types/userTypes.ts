import { Role } from "./roles";

export interface CommonUserFields {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    roles: Role[]
}