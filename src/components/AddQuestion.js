import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/Questions";

class AddQuestion extends Component {
  state = {
    firstChoice: "",
    secondChoice: "",
    returnHome: false,
  };

  handleSubmitAnswer = (event, firstChoice, secondChoice) => {
    event.preventDefault();
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(firstChoice, secondChoice));

    this.setState(() => ({
      firstChoice: "",
      secondChoice: "",
      returnHome: true,
    }));
  };

  handlUpdateState = (e) => {
    const text = e.target.value;
    if (e.target.id === "one") {
      this.setState({ firstChoice: text });
    } else {
      this.setState({ secondChoice: text });
    }
  };
  render() {
    const { firstChoice, secondChoice, returnHome } = this.state;
    const { isUserLoggedin } = this.props;
    if (returnHome === true) {
      return <Redirect to="/" />;
    }

    if (isUserLoggedin === false) {
      return <Redirect to="/signin" />;
    }
    return (
      <div>
        <Card>
          <Card.Header className="title-signin">
            {" "}
            Create New Question{" "}
          </Card.Header>
          <Card.Title className="add-question-title">
            {" "}
            Complete the question:{" "}
          </Card.Title>
          <Card.Title className="add-question-title">
            {" "}
            <strong> Would you rather... </strong>{" "}
          </Card.Title>
          <div className="form">
            <form
              onSubmit={(event) =>
                this.handleSubmitAnswer(event, firstChoice, secondChoice)
              }
            >
              <input
                id="one"
                placeholder="Enter option one text here"
                type="text"
                value={firstChoice}
                onChange={this.handlUpdateState}
              />
              <h2 className="separate-line">
                <span>OR</span>
              </h2>

              <input
                placeholder="Enter option two text here"
                id="two"
                type="text"
                value={secondChoice}
                onChange={this.handlUpdateState}
              />
              <Button
                className="button"
                type="submit"
                disabled={firstChoice === "" || secondChoice === ""}
              >
                {" "}
                Submit{" "}
              </Button>
            </form>
          </div>
        </Card>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    isUserLoggedin: authedUser.signin,
  };
}

export default connect(mapStateToProps)(AddQuestion);
