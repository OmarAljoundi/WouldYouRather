import {
  RECEIVE_QUESTION,
  ADD_QUESTION,
  ADD_VOTE_QUESTION,
} from "../actions/Questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_VOTE_QUESTION:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat([
              action.authedUser.id,
            ]),
          },
        },
      };

    default:
      return state;
  }
}
