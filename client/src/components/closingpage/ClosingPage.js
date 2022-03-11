import React from "react";
import { Link } from "react-router-dom";

function Closingpage() {
  return (
    <div className="closingpage">
      <h1 className="closingpage__header">Congratulations!</h1>
      <h2>
        {" "}
        You've reached the end of the quiz, collect your job at Google, no CV
        required!
      </h2>
      <Link to="/">
        <button className="closingpage__button">
          <p className="closingpage__button-text">Return to START</p>
        </button>
      </Link>
    </div>
  );
}

export default Closingpage;
