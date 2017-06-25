import React from "react";
import { HashRouter, Route} from "react-router-dom";

import About from "../pages/About";
import Surveys from "../pages/Surveys";
import Survey from "../pages/Survey";

import Navbar from "./Navbar";

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="router">
          <Navbar />
          <Route exact path="/" component={Surveys} />
          <Route exact path="/surveys" component={Surveys} />
          <Route path="/surveys/:_id" component={Survey} />
          <Route exact path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}
