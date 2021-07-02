import React from "react";
import ReactDOM from "react-dom";

import Form from "./components/Form";
import NavPanel from "./components/NavPanel";
import FormPanel from "./components/FormPanel";

import Login from "./components/Panels/Login";
import SignUp from "./components/Panels/Signup";

import "./style.css";

const App = () => {
  return (
    <div className="form-wrap">
      <Form>
        <div className="tabs">
          <NavPanel id="login">
            <h2 className="login-tab">Login</h2>
          </NavPanel>
          <NavPanel id="signup">
            <h2 className="signup-tab">Sign Up</h2>
          </NavPanel>
        </div>

        <FormPanel id="login">
          <Login />
        </FormPanel>

        <FormPanel id="signup">
          <SignUp />
        </FormPanel>
      </Form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
