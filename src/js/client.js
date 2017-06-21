import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./App";

const app = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
app);
