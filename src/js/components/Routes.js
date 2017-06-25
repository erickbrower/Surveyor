import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Surveys from "../pages/Surveys";
import Survey from "../pages/Survey";

export default class Routes extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Surveys}>
          <Route path="/:id" component={Survey}></Route>
          <Route path="/about" component={About}></Route>
        </Route>
      </Switch>
    );
  }
}
