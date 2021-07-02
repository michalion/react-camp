import React from "react";
import ReactDOM from "react-dom";

import NoSharing from "./components/no-sharing";
import { HocClass, HocHook } from "./components/hoc";
import RenderProps from "./components/render-prop";

import Hooks from "./components/hook";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <h1>Sharing logic playground</h1>
    <NoSharing />
    <hr />
    <HocClass />
    <hr />
    <HocHook />
    <hr />
    <RenderProps />
    <hr />
    <Hooks />
  </React.StrictMode>,
  root
);
