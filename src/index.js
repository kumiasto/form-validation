import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import GlobalStyle from "./theme/GlobalStyle";

const root = document.getElementById("root");

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  root
);
