import React, { Component } from "react";
import { handleInitialData } from "../actions/Shared";
import { connect } from "react-redux";
import wyr from "../image/wyr.png";
import { handleSetAuthedUser } from "../actions/AuthedUser";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

class SignIn extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  state = {
    user: "",
  };

  handleChange = (choice) => {
    this.setState({ user: choice });
  };

  matchUser = (selectedUser) => {
    if (selectedUser) {
      const user = this.props.usersName.filter(
        (user) => user.id === selectedUser.value.name
      );
      this.props.handleSetAuthedUser(user[0]);
    }
  };

  render() {
    const options = [];
    const { usersName, isUserLoggedin } = this.props;
    const { user } = this.state;

    if (isUserLoggedin === true) {
      return <Redirect to="/" />;
    }
    usersName.map((user) => {
      const name = user.id;
      const avatar = user.avatarURL;
      return options.push({
        value: { name },
        label: (
          <div className="left-view">
            {" "}
            <img className="avater" alt="avater" src={avatar} /> {user.name}{" "}
          </div>
        ),
      });
    });

    return (
      <div>
        <Card>
          <Card.Header className="title-signin">
            {" "}
            Welcome to the would you rather App!{" "}
          </Card.Header>
          <Card.Title className="title-signin">
            {" "}
            Please Sign In to continue{" "}
          </Card.Title>
          <Card.Img className="wyr-image" src={wyr} />
          <Card.Title className="title-signin"> Sign In </Card.Title>

          <div className="users-list">
            <Select
              value={user}
              onChange={this.handleChange}
              className="options-list"
              options={options}
              classNamePrefix="mySelect"
            />
            <Link
              to="/"
              className={user ? "active" : "disabled"}
              onClick={() => this.matchUser(user)}
            >
              {" "}
              <Button className="button-signin" disabled={user ? false : true}>
                {" "}
                Sign In{" "}
              </Button>{" "}
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    isUserLoggedin: authedUser ? authedUser.signin : false,
    usersName: Object.values(users),
  };
}

export default connect(mapStateToProps, {
  handleSetAuthedUser,
  handleInitialData,
})(SignIn);
