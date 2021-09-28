import { MessageInterface } from './types';
export declare class Logger {
    source: string;
    constructor(source?: string);
    addMeta(m: any): void;
    removeMeta(key: string): void;
    getMeta(): {};
    putAuth(apiUrl: string, apiKey: string): void;
    buildMessage: (messageObject: MessageInterface) => Promise<void>;
    log(message: any, data?: any): void;
    silly(message: any, data?: any): void;
    info(message: any, data?: any): void;
    warn(message: any, data?: any): void;
    error(message: any, data?: any): void;
}
