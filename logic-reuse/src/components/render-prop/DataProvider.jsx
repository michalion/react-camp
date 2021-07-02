import React, { Component } from "react";

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.initialDataGetter(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({ data });
  }

  componentDidMount() {
    this.props.observable.addSubscriber(this.handleChange);
  }

  componentWillUnmount() {
    this.props.observable.removeSubscriber(this.handleChange);
  }

  render() {
    return <>{this.props.render(this.state)}</>;
  }
}

export default DataProvider;
