import { CommonUserFields } from "./userTypes";

export interface LoginResponse extends CommonUserFields {
    token: string
}

export interface FailedLoginResponse {
    timestamp: string,
    status: number,
    error: string,
    message: string,
    path: string
}