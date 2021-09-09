import {
  RECEIVE_USERS,
  USERS_ADD_ANSWER,
  USERS_ADD_QUESTION,
} from "../actions/Users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case USERS_ADD_QUESTION:
      const question = action.question;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id]),
        },
      };
    case USERS_ADD_ANSWER:
      return {
        ...state,
        [action.authedUser.id]: {
          ...state[action.authedUser.id],
          answers: {
            ...state[action.authedUser.id].answers,
            [action.questionId]: action.answer,
          },
        },
      };

    default:
      return state;
  }
}
