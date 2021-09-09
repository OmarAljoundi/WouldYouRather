import {
  AUTH_USER_ID,
  AUTH_ADD_ANSWER,
  AUTH_ADD_QUESTION,
  RESET_AUTH_USER,
} from "../actions/AuthedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case AUTH_USER_ID:
      return {
        ...state,
        ...action.authedUser,
        signin: true,
      };
    case RESET_AUTH_USER:
      return {
        ...action.setNull,
        signin: false,
      };
    case AUTH_ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat([action.question.id]),
      };
    case AUTH_ADD_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.answer,
        },
      };

    default:
      return state;
  }
}
