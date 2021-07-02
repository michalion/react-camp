import React from "react";
import { FormConsumer } from "./FormContext";

const NavPanel = (props) => (
  <FormConsumer>
    {({ actions }) => {
      return (
        <div onClick={() => actions.switchPanel(props.id)}>
          {props.children}
        </div>
      );
    }}
  </FormConsumer>
);

export default NavPanel;
