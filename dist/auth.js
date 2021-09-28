"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
class Auth {
    static putAuth(apiUrl, apiKey) {
        Auth.auth = {
            apiUrl: apiUrl,
            apiKey: apiKey
        };
    }
    static getAuth() {
        return Auth.auth;
    }
}
exports.Auth = Auth;
Auth.auth = {
    apiUrl: '',
    apiKey: ''
};
//# sourceMappingURL=auth.js.map