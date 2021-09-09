import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { isInclude, formatQuestion } from "../utils/helperMethods";
import SetAnswer from "./SetAnswer";
import StaticsAnswers from "./StaticsAnswers";
import ErrorPage from "./ErrorPage";

class QuestionPage extends Component {
  render() {
    const { authedUser, question } = this.props;

    if (!question) {
      return <ErrorPage />;
    }

    const questionHasAnswered = isInclude(authedUser, question);

    return (
      <Fragment>
        {questionHasAnswered && <StaticsAnswers question={question} />}
        {!questionHasAnswered && <SetAnswer question={question} />}
      </Fragment>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(users[question.author], question, authedUser)
      : null,
  };
}

export default connect(mapStateToProps)(QuestionPage);
