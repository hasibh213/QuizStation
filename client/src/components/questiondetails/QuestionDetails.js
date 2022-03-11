import React from "react";
import "./questiondetails.scss";

const QuestionDetails = ({
  id,
  question,
  round,
  handleClick,
  optionA,
  aCorrect,
  optionB,
  bCorrect,
}) => {
  return (
    <>
      <article className="details">
        <h1 className="details__header">Question {id}</h1>
        <h2 className="details__subheader">Round {round}</h2>
        <h3 className="details__question">{question}</h3>
        <div className="details__options">
          <button
            onClick={handleClick}
            value={aCorrect}
            className="details__answer"
          >
            {optionA}
          </button>
          <button
            onClick={handleClick}
            value={bCorrect}
            className="details__answer"
          >
            {optionB}
          </button>
        </div>
      </article>
    </>
  );
};

export default QuestionDetails;
