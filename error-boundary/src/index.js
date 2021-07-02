import React from "react";
import ReactDOM from "react-dom";

import Location from "./components/Location";
import GenericErrorBoundary from "./components/GenericErrorBoundary";

import locations from "./data/valid";
// import locations from "./data/invalid";

const [body] = document.getElementsByTagName("body");

ReactDOM.render(
  <React.StrictMode>
    <GenericErrorBoundary>
      <Location locations={locations} />
    </GenericErrorBoundary>
  </React.StrictMode>,
  body
);
