import React from "react";
// import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage/HomePage.js";
import QuestionPage from "./components/questionpage/QuestionPage.js";
// import OutcomePage from "./components/outcomepage/OutcomePage.js";
import ClosingPage from "./components/closingpage/ClosingPage.js";

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          path="/question/:id"
          render={(routerProps) => <QuestionPage {...routerProps} />}
        />
        {/* <Route path="/outcome" component={OutcomePage} /> */}
        <Route path="/closing" component={ClosingPage} />
      </Switch>
    </div>
  );
}
