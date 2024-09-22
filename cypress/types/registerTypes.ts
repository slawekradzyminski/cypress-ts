import { CommonUserFields } from "./userTypes";

export interface RegisterRequest extends CommonUserFields {
    password: string,
}

export type User = RegisterRequest