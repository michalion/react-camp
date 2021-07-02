import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/Counter";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  root
);
