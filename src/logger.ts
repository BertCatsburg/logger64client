import {Meta} from "./meta";
import {Auth} from "./auth";
import {LogMessageInterface, MessageInterface} from './types';
import axios from 'axios';

export class Logger {
    source: string = '';

    constructor(source = '') {
        this.source = source;
    }


    addMeta(m: any) {
        Meta.putMeta(m);
    }

    removeMeta(key: string) {
        Meta.dropMeta(key);
    }

    getMeta() {
        return Meta.getMeta();
    }

    putAuth(apiUrl: string, apiKey: string) {
        Auth.putAuth(apiUrl, apiKey);
    }

    buildMessage = async (messageObject: MessageInterface) => {
        const {message, data, severity} = messageObject;
        const {apiUrl, apiKey} = Auth.getAuth();

        try {

            // * Building the Message
            let logMessage: LogMessageInterface = {
                message: message,
                source: this.source,
                severity: severity
            }

            // * Check for Meta Info
            const meta = Meta.getMeta();
            if (meta) (
                logMessage = {
                    ...logMessage,
                    ...meta
                }
            )

            // * Check for data
            if (data) {
                logMessage = {
                    ...logMessage,
                    data: data
                }
            }

            const headers = {
                "Content-Type": "application/json",
                "Authorization": "apiKey " + apiKey
            }
            await axios.post(`${apiUrl}/log`, logMessage, {
                headers: headers
            })

        } catch (error: any) {
            console.error(error.message)
        }
    }

    log(message: any, data?: any) {
        this.buildMessage({
            message,
            data,
            severity: "LOG"
        });
    }

    silly(message: any, data?: any) {
        this.buildMessage({
            message,
            data,
            severity: "SILLY"
        });
    }

    info(message: any, data?: any) {
        this.buildMessage({
            message,
            data,
            severity: "INFO"
        });
    }

    warn(message: any, data?: any) {
        this.buildMessage({
            message,
            data,
            severity: "WARN"
        });
    }

    error(message: any, data?: any) {
        this.buildMessage({
            message,
            data,
            severity: "ERROR"
        });
    }
}
