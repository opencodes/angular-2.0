"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//all of the authentication events
exports.EVENTS = {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
};
exports.USER_ROLES = {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
};
exports.URL = {
    login: "/api/user/login",
    signup: "/api/user/signup"
};
//# sourceMappingURL=auth.constant.js.map