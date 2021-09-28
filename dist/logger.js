"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const meta_1 = require("./meta");
const auth_1 = require("./auth");
const axios_1 = __importDefault(require("axios"));
class Logger {
    constructor(source = '') {
        this.source = '';
        this.buildMessage = (messageObject) => __awaiter(this, void 0, void 0, function* () {
            const { message, data, severity } = messageObject;
            const { apiUrl, apiKey } = auth_1.Auth.getAuth();
            try {
                let logMessage = {
                    message: message,
                    source: this.source,
                    severity: severity
                };
                const meta = meta_1.Meta.getMeta();
                if (meta)
                    (logMessage = Object.assign(Object.assign({}, logMessage), meta));
                if (data) {
                    logMessage = Object.assign(Object.assign({}, logMessage), { data: data });
                }
                const headers = {
                    "Content-Type": "application/json",
                    "Authorization": "apiKey " + apiKey
                };
                yield axios_1.default.post(`${apiUrl}/log`, logMessage, {
                    headers: headers
                });
            }
            catch (error) {
                console.error(error.message);
            }
        });
        this.source = source;
    }
    addMeta(m) {
        meta_1.Meta.putMeta(m);
    }
    removeMeta(key) {
        meta_1.Meta.dropMeta(key);
    }
    getMeta() {
        return meta_1.Meta.getMeta();
    }
    putAuth(apiUrl, apiKey) {
        auth_1.Auth.putAuth(apiUrl, apiKey);
    }
    log(message, data) {
        this.buildMessage({
            message,
            data,
            severity: "LOG"
        });
    }
    silly(message, data) {
        this.buildMessage({
            message,
            data,
            severity: "SILLY"
        });
    }
    info(message, data) {
        this.buildMessage({
            message,
            data,
            severity: "INFO"
        });
    }
    warn(message, data) {
        this.buildMessage({
            message,
            data,
            severity: "WARN"
        });
    }
    error(message, data) {
        this.buildMessage({
            message,
            data,
            severity: "ERROR"
        });
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map