import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgressBar, Card, Image, Row, Col } from "react-bootstrap";

class StaticsAnswers extends Component {
  render() {
    const { question, isOne, totalVotes, optionOneRatio, optionTwoRatio } =
      this.props;
    const { name, optionOne, optionTwo, avatar } = question;

    return (
      <Card>
        <Card.Body>
          <Row>
            <Col xs={4} md={4} className="result-container">
              <Image thumbnail src={avatar} alt="userImage" className="image" />
            </Col>

            <Col xs={8} md={8}>
              <Card.Title> Added by {name} </Card.Title>
              <Card.Title> Results: </Card.Title>
              <div className="inner-poll" id={isOne ? "activeOne" : ""}>
                <Card.Text> Would you rather {optionOne.text}</Card.Text>
                <ProgressBar
                  now={optionOneRatio}
                  label={`${Math.round(optionOneRatio * 10) / 10}%`}
                  variant="danger"
                />
                <Card.Title>
                  {optionOne.votes.length} out of {totalVotes}
                </Card.Title>
              </div>
              <div className={isOne ? "op1" : "op2"}> Your vote </div>
              <div className="inner-poll" id={!isOne ? "activeOne" : ""}>
                <Card.Text> Would you rather {optionTwo.text}</Card.Text>
                <ProgressBar
                  now={optionTwoRatio}
                  label={`${Math.round(optionTwoRatio * 10) / 10}%`}
                  variant="primary"
                />
                <Card.Title>
                  {optionTwo.votes.length} out of {totalVotes}
                </Card.Title>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
function mapStateToProps({ authedUser }, { question }) {
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionOneRatio = (question.optionOne.votes.length / totalVotes) * 100;
  const optionTwoRatio = (question.optionTwo.votes.length / totalVotes) * 100;

  return {
    question,
    totalVotes,
    optionOneRatio,
    optionTwoRatio,
    isOne: question.optionOne.votes.includes(authedUser.id),
  };
}

export default connect(mapStateToProps)(StaticsAnswers);
