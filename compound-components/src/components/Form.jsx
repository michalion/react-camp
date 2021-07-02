import React from "react";
import { FormProvider } from "./FormContext";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePanel: "login",
    };
  }

  render() {
    return (
      <React.Fragment>
        <FormProvider
          value={{
            activePanel: this.state.activePanel,
            actions: {
              switchPanel: (newPanel) => {
                this.setState({
                  activePanel: newPanel,
                });
              },
            },
          }}
        >
          {this.props.children}
        </FormProvider>
      </React.Fragment>
    );
  }
}
