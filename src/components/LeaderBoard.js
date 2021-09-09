import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { Redirect } from "react-router-dom";
import { sum } from "../utils/helperMethods";
class LeaderBoard extends Component {
  render() {
    const { users, isUserLoggedin } = this.props;

    if (isUserLoggedin === false) {
      return <Redirect to="/signin" />;
    }

    const usersId = Object.keys(users).sort(
      (a, b) =>
        sum(Object.keys(users[b].answers).length, users[b].questions.length) -
        sum(Object.keys(users[a].answers).length, users[a].questions.length)
    );

    return (
      <Fragment>
        <ul>
          {usersId.map((id) => (
            <li key={id}>
              <UserProfile id={id} />
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    isUserLoggedin: authedUser.signin,
    users,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
