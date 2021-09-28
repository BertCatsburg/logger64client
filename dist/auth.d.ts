import { AuthInterface } from "./types";
export declare class Auth {
    static auth: {
        apiUrl: string;
        apiKey: string;
    };
    static putAuth(apiUrl: string, apiKey: string): void;
    static getAuth(): AuthInterface;
}
