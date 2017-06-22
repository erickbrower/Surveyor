import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Surveys from "../pages/Surveys";

export default class Routes extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Surveys}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    );
  }
}
