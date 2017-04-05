//all of the authentication events
export const EVENTS = {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
}

export const USER_ROLES =  {
  all: '*',
  admin: 'admin',
  editor: 'editor',
  guest: 'guest'
}

export const URL = {
  login : "/api/user/login",
  signup : "/api/user/signup"
}