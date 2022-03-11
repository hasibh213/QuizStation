// import React from "react";
import React, { Component } from "react";
import axios from "axios";
import "./questionpage.scss";
import QuestionDetails from "../questiondetails/QuestionDetails.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import correctSound from "../../assets/sound/correct.mp3";
import wrongSound from "../../assets/sound/wrong.mp3";
import student from "../../assets/svg/student.svg";
// import joe from "../../assets/svg/hombre.svg";

import "sweetalert2/src/sweetalert2.scss";

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

  correctAudio = new Audio(correctSound);
  wrongAudio = new Audio(wrongSound);

  answerHandler = (event) => {
    event.preventDefault();
    let answer = event.target.value;
    if (answer === "false") {
      this.wrongAudio.play();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "That's the wrong answer!!",
        footer: "<p>Give it another try</p>",
      });
      console.log("YOU GOT IT WRONG");
    } else {
      console.log("YOU GOT IT RIGHT");
      const location = this.props.match.params.id;
      if (location >= 18) {
        this.props.history.push("/closing");
      } else {
        this.props.history.push(`${parseInt(location * 1 + 1)}`);
        this.correctAudio.play();
        Swal.fire({
          icon: "success",
          title: "HURRAY!",
          text: "That's the correct answer!!",
          footer: "<p>Proceed to the next question</p>",
        });
      }
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
          <article className="question__avatars">
            <img src={student} alt="" />
            {/* <img src={joe} alt="" /> */}
          </article>
        </section>
      </>
    );
  }
}

export default QuestionPage;
