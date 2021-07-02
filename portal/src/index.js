import React from "react";
import ReactDOM from "react-dom";

import LoginPage from "./components/LoginPage";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  root
);
