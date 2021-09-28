import {AuthInterface} from "./types";

export class Auth {
    static auth = {
        apiUrl: '',
        apiKey: ''
    };

    static putAuth(apiUrl: string, apiKey: string): void {
        Auth.auth = {
            apiUrl: apiUrl,
            apiKey: apiKey
        }
    }

    static getAuth(): AuthInterface {
        return Auth.auth;
    }

}
