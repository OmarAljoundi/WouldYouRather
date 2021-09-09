export const RECEIVE_USERS = "RECEIVE_USERS";
export const USERS_ADD_QUESTION = "USERS_ADD_QUESTION";
export const USERS_ADD_ANSWER = "USERS_ADD_ANSWER";

export function getUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
