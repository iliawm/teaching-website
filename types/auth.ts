import { Session } from "better-auth/types";
import {PhoneNumber} from "better-auth";
export interface User{
    id: string,
    name: string,
    email: string
    image: string
    role: string
    review: number,
    PhoneNumber: PhoneNumber,
    desc: string,
}
export interface ExtendedSession extends Session {
    user: User
}