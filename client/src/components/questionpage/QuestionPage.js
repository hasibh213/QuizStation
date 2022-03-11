// import React from "react";
import React, { Component } from "react";
import axios from "axios";
import "./questionpage.scss";
import QuestionDetails from "../questiondetails/QuestionDetails.js";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";

// API CALL INFORMATION
const API_QUESTIONS = "http://localhost:8080/quiz";
const API_QUESTIONS_DETAILS = (id) => `http://localhost:8080/quiz/${id}`;

class QuestionPage extends Component {
  state = {
    allData: [],
    round: null,
    number: null,
    question: null,
    optionA: null,
    aCorrect: null,
    optionB: null,
    bCorrect: null,
  };

  // FIRST API CALL TO UPDATE DATA IN STATE
  getStateData = async () => {
    const response = await axios.get(API_QUESTIONS);
    const data = response.data;
    console.log(data);
    this.setState({
      allData: data,
      number: data[0].id,
      round: data[0].round,
      question: data[0].question,
      optionA: data[0].options[0].answer,
      aCorrect: data[0].options[0].correct,
      optionB: data[0].options[1].answer,
      bCorrect: data[0].options[1].correct,
    });
  };

  componentDidMount() {
    this.getStateData();
  }

  // SECOND API CALL TO UPDATE DATA IN STATE IF URL CHANGES
  updateStateData = async (quesID) => {
    console.log("get the next question", quesID);
    const response = await axios.get(API_QUESTIONS_DETAILS(quesID));
    const individualData = response.data;
    this.setState({
      number: individualData.id,
      round: individualData.round,
      question: individualData.question,
      optionA: individualData.options[0].answer,
      aCorrect: individualData.options[0].correct,
      optionB: individualData.options[1].answer,
      bCorrect: individualData.options[1].correct,
    });
  };

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (prevProps.match.params.id !== this.props.match.params.id) {
      if (this.props.match.path === "question/1") {
        this.updateStateData(this.state.allData[0].id);
      } else {
        this.updateStateData(this.props.match.params.id);
      }
    }
  }

  answerHandler = (event) => {
    event.preventDefault();
    let answer = event.target.value;
    if (answer === "false") {
      console.log("YOU GOT IT WRONG");
    } else {
      console.log("YOU GOT IT RIGHT");
      this.props.history.push(
        `${parseInt(this.props.match.params.id * 1 + 1)}`
      );
    }
  };

  render() {
    // if (this.state.loading) {
    //   return <div>Loading</div>;
    // }
    return (
      <>
        <section className="question">
          {this.state.allData
            .filter((question) => {
              return question.id === this.state.number;
            })
            .map((question) => {
              return (
                <Link
                  className="question__link"
                  key={question.id}
                  to={`/question/${question.id}`}
                  disable
                >
                  <QuestionDetails
                    id={this.state.number}
                    round={this.state.round}
                    question={this.state.question}
                    handleClick={this.answerHandler}
                    optionA={this.state.optionA}
                    aCorrect={this.state.aCorrect}
                    optionB={this.state.optionB}
                    bCorrect={this.state.bCorrect}
                  />
                </Link>
              );
            })}
        </section>
      </>
    );
  }
}

export default QuestionPage;
