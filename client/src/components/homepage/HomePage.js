import React from "react";
import { Link } from "react-router-dom";
import "./homepage.scss";
import jason from "../../assets/images/jason.jpeg";
// import startSound from "../../assets/sound/start.mp3";

// const startAudio = new Audio(startSound);

// const startHandler = (event) => {
//   event.preventDefault();
//   startAudio.play();
// };

function Homepage() {
  return (
    <div className="homepage">
      <img className="homepage__jason" src={jason} alt="" />
      <h1 className="homepage__title">WELCOME TO QUIZSTATION</h1>
      <div className="homepage__footer">
        <h2 className="homepage__speechbox sb2">
          Welcome Grasshopper! To make it in london as a web dev, you're gonna
          need to practice your skills! Let's put you to the test..
        </h2>
        <Link to="/question/1">
          <button className="homepage__button">
            <p className="homepage__button-text">START</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
