"use strict";
//all of the authentication events
exports.AUTH_EVENTS = {
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
exports.GITCONFIG = {
    client_id: "a1ef6761735525a75c1f",
    client_secret: "5365433f8e0f2aa37ee02750ad6418f34c9316e7"
};
//# sourceMappingURL=auth.constant.js.map