import React, { Component } from "react";

const withSubscription = (WrappedComponent, observable, initialDataGetter) => {
  return class DataSubscribed extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: initialDataGetter(),
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(data) {
      this.setState({ data });
    }

    componentDidMount() {
      observable.addSubscriber(this.handleChange);
    }

    componentWillUnmount() {
      observable.removeSubscriber(this.handleChange);
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};

export default withSubscription;
