import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <h1 className="homepage__title">WELCOME TO QUIZSTATION</h1>
      <Link to="/QuestionPage.js">
        <button className="homepage__button">
          <p className="homepage__button-text">START</p>
        </button>
      </Link>
    </div>
  );
}

export default Homepage;
