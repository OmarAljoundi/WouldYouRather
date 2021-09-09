import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import QuestionPage from "./QuestionPage";
import NavigationBar from "./NavigationBar";
import AddQuestion from "./AddQuestion";
import LeaderBoard from "./LeaderBoard";
import ErrorPage from "./ErrorPage";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { isUserLoggedin } = this.props;

    return (
      <Router>
        {isUserLoggedin === false ? null : <NavigationBar />}
        <Fragment>
          <Switch>
            <Route path="/signin" exact component={SignIn} />
            <Route path="/" exact component={Dashboard} />
            <Route
              path="/question/:id/"
              render={(props) => <QuestionPage id={props.match.params.id} />}
            />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route path="/add" component={AddQuestion} />
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    isUserLoggedin: authedUser ? authedUser.signin : false,
  };
}

export default connect(mapStateToProps)(App);
