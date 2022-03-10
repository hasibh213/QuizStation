import React from "react";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage/HomePage.js";
import QuestionPage from "./components/questionpage/QuestionPage.js";

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/question" component={QuestionPage} />
        <Route
          path="/videos/:id"
          render={(routerProps) => <Homepage {...routerProps} />} */}
        />
      </Switch>
    </div>
  );
}
