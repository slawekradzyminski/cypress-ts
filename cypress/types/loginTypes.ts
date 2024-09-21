import { Role } from "./roles";

export interface LoginResponse {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    roles: Role[],
    token: string
}