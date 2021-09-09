export const AUTH_USER_ID = "AUTH_USER_ID";
export const AUTH_ADD_ANSWER = "AUTH_ADD_ANSWER";
export const AUTH_ADD_QUESTION = "AUTH_ADD_QUESTION";
export const RESET_AUTH_USER = "RESET_AUTH_USER";

export function setAuthedUser(authedUser) {
  return {
    type: AUTH_USER_ID,
    authedUser,
  };
}

export function handleSetAuthedUser(authedUser) {
  return (dispatch) => {
    return dispatch(setAuthedUser(authedUser));
  };
}

export function resetAuthedUser() {
  return {
    type: RESET_AUTH_USER,
    setNull: null,
  };
}

export function handleResetAuthedUser() {
  return (dispatch) => {
    return dispatch(resetAuthedUser());
  };
}
