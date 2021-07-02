import React from "react";
import { FormConsumer } from "./FormContext";

const FormPanel = (props) => {
  return (
    <FormConsumer>
      {({ activePanel }) => (activePanel === props.id ? props.children : null)}
    </FormConsumer>
  );
};

export default FormPanel;
