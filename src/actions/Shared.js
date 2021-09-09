import { receiveUsers } from "./Users";
import { receiveQuestions } from "./Questions";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
