import { saveQuestionAnswer, saveQuestion } from "../utils/api";
import { AUTH_ADD_ANSWER, AUTH_ADD_QUESTION } from "./AuthedUser";
import { USERS_ADD_QUESTION, USERS_ADD_ANSWER } from "./Users";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_VOTE_QUESTION = "ADD_VOTE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTION,
    questions,
  };
}

function addVoteToQuestion({ answer, authedUser, questionId }) {
  return {
    type: ADD_VOTE_QUESTION,
    answer,
    authedUser,
    questionId,
  };
}

function addAnswerToUser({ answer, authedUser, questionId }) {
  return {
    type: USERS_ADD_ANSWER,
    answer,
    authedUser,
    questionId,
  };
}

function addAnswerToAuthUser({ questionId, answer }) {
  return {
    type: AUTH_ADD_ANSWER,
    answer,
    questionId,
  };
}

export function handleAddVoteToQuestion(questionId, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(addVoteToQuestion({ answer, authedUser, questionId }));
    dispatch(addAnswerToUser({ answer, authedUser, questionId }));
    dispatch(addAnswerToAuthUser({ questionId, answer }));
    return saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer,
    }).catch((e) => {
      alert("Some Error Has occured");
    });
  };
}

function addQuestionToAuthedUser(question) {
  return {
    type: AUTH_ADD_QUESTION,
    question,
  };
}

function addQuestionToUser(question) {
  return {
    type: USERS_ADD_QUESTION,
    question,
  };
}
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const author = authedUser.id;
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToAuthedUser(question));
      dispatch(addQuestionToUser(question));
    });
  };
}
