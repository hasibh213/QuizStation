import React from "react";

const QuestionDetails = ({
  id,
  question,
  handleClick,
  optionA,
  aCorrect,
  optionB,
  bCorrect,
}) => {
  return (
    <>
      <h1 className="question__header">Question {id}</h1>
      <h2 className="question__subheader">{question}</h2>
      <div className="question__options">
        <button
          onClick={handleClick}
          value={aCorrect}
          className="question__answer"
        >
          {optionA}
        </button>
        <button
          onClick={handleClick}
          value={bCorrect}
          className="question__answer"
        >
          {optionB}
        </button>
      </div>
    </>
  );
};

export default QuestionDetails;
