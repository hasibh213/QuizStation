import React from "react";
import { Link } from "react-router-dom";
import "./closingpage.scss";

function Closingpage() {
  return (
    <div className="closingpage">
      <div className="closingpage__speechbox">
        <h1 className="closingpage__header">Congratulations!</h1>
        <h2 className="closingpage__text">
          You've reached the end of the quiz, collect your job at Google, no CV
          required!
        </h2>
      </div>
      <Link to="/">
        <button className="closingpage__button">
          <p className="closingpage__button-text">Return to START</p>
        </button>
      </Link>
    </div>
  );
}

export default Closingpage;
