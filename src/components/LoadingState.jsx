import React, { Component } from "react";
import { LoadingStateWrapper } from "../utils/styledComponents";

class LoadingState extends Component {
  render() {
    return (
      <LoadingStateWrapper>
        <div className="first"></div>
        <div className="second"></div>
        <div className="last"></div>
      </LoadingStateWrapper>
    );
  }
}

export default LoadingState;
