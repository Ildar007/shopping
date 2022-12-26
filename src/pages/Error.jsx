import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/_vars";

class Error extends Component {
  render() {
    return (
      <ErrorPageWrapper>
        <div>
          <p>404</p>
          <p>Oops! I think youre lost 😓</p>
          <Link to="/">Go to home</Link>
        </div>
      </ErrorPageWrapper>
    );
  }
}

export default Error;

const ErrorPageWrapper = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  height: 60vh;
  div {
    text-align: center;
    p:first-child {
      color: ${colors.primary};
      font-size: 50px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    p:nth-child(2) {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    a {
      text-decoration: underline;
      color: ${colors.primary};
    }
  }
`;
