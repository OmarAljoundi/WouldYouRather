import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddVoteToQuestion } from "../actions/Questions";
import StaticsAnswers from "./StaticsAnswers";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Image, Row, Col } from "react-bootstrap";

class SetAnswer extends Component {
  state = {
    choice: "",
  };

  handleSubmit = (id, choice) => {
    this.props.dispatch(handleAddVoteToQuestion(id, choice));
    return <StaticsAnswers question={this.props.question} />;
  };

  handleChange = (event) => {
    this.setState({ choice: event.target.value });
  };

  render() {
    const { question } = this.props;
    const { name, id, optionOne, optionTwo, avatar } = question;

    return (
      <Card>
        <Card.Header className="title-signin"> {name} Asks: </Card.Header>
        <Card.Body>
          <Row>
            <Col xs={4} md={4}>
              <Image thumbnail src={avatar} alt="userImage" className="image" />
            </Col>
            <Col xs={8} md={8}>
              <Card.Title> Would You Rather... </Card.Title>
              <input
                type="radio"
                value="optionOne"
                name="options"
                onClick={(event) => this.handleChange(event)}
              />{" "}
              {optionOne.text}
              <br />
              <input
                type="radio"
                value="optionTwo"
                name="options"
                onClick={(event) => this.handleChange(event)}
              />{" "}
              {optionTwo.text}
              <Button
                onClick={() => this.handleSubmit(id, this.state.choice)}
                className="button-Submit"
                disabled={this.state.choice ? false : true}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser }, { question }) {
  return {
    question,
  };
}

export default connect(mapStateToProps)(SetAnswer);
