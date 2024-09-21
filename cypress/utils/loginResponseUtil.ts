import { LoginResponse } from "../types/loginTypes";
import { User } from "../types/registerTypes";

export const loginResponseFrom = (user: User): LoginResponse => {
    const { password, ...rest } = user;
    return {
        ...rest,
        token: 'mock_token'
    };
};