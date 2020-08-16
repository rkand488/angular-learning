export interface UserData {
    username: string;
    password: string;
    name: string;
    token: string
}

export class User implements UserData {
    username: string;
    password: string;
    name: string;
    token: string;
}
