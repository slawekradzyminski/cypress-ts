import { Role } from "./roles";

export interface LoginResponse {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    roles: Role[],
    token: string
}

export interface FailedLoginResponse {
    timestamp: string,
    status: 422,
    error: string,
    message: string,
    path: string
}