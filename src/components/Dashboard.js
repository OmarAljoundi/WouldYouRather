import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import QuestionBox from "./QuestionBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import { isInclude } from "../utils/helperMethods";

class Dashboard extends Component {
  render() {
    const { questions, authedUser, isUserLoggedin } = this.props;

    if (isUserLoggedin === false) {
      return <Redirect to="/signin" />;
    }
    const questionsIds = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    return (
      <div className="content-dashboard">
        <Tabs
          defaultActiveKey="unanswered"
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="unanswered" title="Unanswered Questions">
            <ul>
              {questionsIds.map(
                (id) =>
                  !isInclude(authedUser, questions[id]) && (
                    <li key={id}>
                      {" "}
                      <QuestionBox id={id} />{" "}
                    </li>
                  )
              )}
            </ul>
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <ul>
              {questionsIds.map(
                (id) =>
                  isInclude(authedUser, questions[id]) && (
                    <li key={id}>
                      {" "}
                      <QuestionBox id={id} />{" "}
                    </li>
                  )
              )}
            </ul>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    questions,
    authedUser,
    isUserLoggedin: authedUser ? authedUser.signin : false,
  };
}

export default connect(mapStateToProps)(Dashboard);
