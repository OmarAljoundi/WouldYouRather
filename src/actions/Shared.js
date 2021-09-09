import { getUsers } from "./Users";
import { getQuestions } from "./Questions";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
    });
  };
}
