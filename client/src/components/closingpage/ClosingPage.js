import React from "react";
import { Link } from "react-router-dom";

function Closingpage() {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Congratulations!</h1>
      <h2>
        {" "}
        You've reached the end of the quiz, collect your job at Google, no CV
        required!
      </h2>
      <Link to="/">
        <button className="homepage__button">
          <p className="homepage__button-text">Return to START</p>
        </button>
      </Link>
    </div>
  );
}

export default Closingpage;
