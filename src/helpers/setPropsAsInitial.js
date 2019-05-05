import React, { Component } from "react";

// HOC to transform props into initialValues of decorated component
export const setPropsAsInitial = WrappedComponent => (
  class extends Component {
    render() {
      return <WrappedComponent {...this.props} initialValues={this.props} />;
    }
  }
);
