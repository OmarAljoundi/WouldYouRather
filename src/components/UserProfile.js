import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Image, Row, Col } from "react-bootstrap";
class UserProfile extends Component {
  render() {
    const { user } = this.props;
    const numOfAnswers = Object.keys(user.answers).length;
    const numOfQuestions = user.questions.length;
    const score = numOfQuestions + numOfAnswers;
    return (
      <Card>
        <Card.Body>
          <Row>
            <Col xs={3} md={3}>
              <Image
                thumbnail
                src={user.avatarURL}
                alt="userImage"
                className="image"
              />
            </Col>
            <Col xs={6} md={6} className="inner">
              <Card.Title> {user.name} </Card.Title>
              <Card.Text> Answered Questions: {numOfAnswers} </Card.Text>
              <div className="bottom"></div>
              <Card.Text> Created Questions: {numOfQuestions}</Card.Text>
            </Col>

            <Col xs={3} md={3}>
              <div className="inner">
                <Card.Title className="score-title"> Score </Card.Title>
                <div className="score">
                  <span> {score} </span>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  const user = users[id];
  return {
    user: user ? user : null,
  };
}

export default connect(mapStateToProps)(UserProfile);
