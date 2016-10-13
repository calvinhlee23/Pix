export const SessionConstants = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  SIGN_UP: "SIGN_UP",
  RECEIVE_CURRENT_USER: "RECEIVE_CURRENT_USER",
  RECEIVE_ERRORS: "RECEIVE_ERRORS",
};

export const login = (user) => ({
  type: SessionConstants.LOG_IN,
  user
});

export const signup = (user) => ({
  type: SessionConstants.SIGN_UP,
  user
});

export const logout = () => ({
  type: SessionConstants.LOG_OUT,
});

export const receiveCurrentUser = (user) => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  user,
});

export const receiveErrors = (errors) => ({
 type: SessionConstants.RECEIVE_ERRORS,
 errors
});
