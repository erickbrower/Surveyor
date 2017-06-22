import React from "react";

import Navbar from "./Navbar";

import Routes from "./Routes"

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}
