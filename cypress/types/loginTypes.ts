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
    status: number,
    error: string,
    message: string,
    path: string
}