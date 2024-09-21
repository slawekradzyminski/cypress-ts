import { Role } from "./roles";

export interface RegisterRequest {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    roles: Role[]
}

export type User = RegisterRequest