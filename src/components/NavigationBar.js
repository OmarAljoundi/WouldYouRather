import React, { Component } from "react";
import { handleResetAuthedUser } from "../actions/AuthedUser";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, Navbar, Image } from "react-bootstrap";

class NavigationBar extends Component {
  resetAuthedUser = () => {
    this.props.dispatch(handleResetAuthedUser());
  };

  render() {
    return (
      <Navbar>
        <div className="NavigationBar">
          <Nav variant="pills" defaultActiveKey={window.location.pathname}>
            <Nav.Link eventKey="/" to="/" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link eventKey="/add" to="/add" as={Link}>
              New Question
            </Nav.Link>
            <Nav.Link eventKey="/leaderboard" to="/leaderboard" as={Link}>
              Leader Board
            </Nav.Link>
            <Navbar.Text className="right-nav">
              {" "}
              Hello {this.props.authedUser.name}{" "}
            </Navbar.Text>
            <Image
              thumbnail
              roundedCircle
              src={this.props.authedUser.avatarURL}
              alt="authedAvater"
              className="avater"
            />
            <Nav.Link onClick={this.resetAuthedUser} to="/signin" as={Link}>
              Log Out
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavigationBar);
