export interface LogMessageInterface {
    message: any;
    source: string;
    severity: string;
    meta?: any;
    data?: any;
}
export interface MessageInterface {
    message: any;
    severity: string;
    data: any;
}
export interface AuthInterface {
    apiUrl: string;
    apiKey: string;
}
