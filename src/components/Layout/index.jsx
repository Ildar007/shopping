import React, { Component } from "react";
import Navbar from "./navbar";
import { AppWrapper, MainContent } from "../../utils/styledComponents";
import { graphql } from "@apollo/client/react/hoc";
import { GET_CURRENCIES } from "../../utils/queries";

class Layout extends Component {
  render() {
    const { categories, children, active, data } = this.props;
    const currencies =
    data.currencies &&
    data.currencies.map((currency) => ({
      symbol: currency.symbol,
      label: currency.label,
    })); // get list of currencies
    return (
      <AppWrapper>
        <Navbar categories={categories} currencies={currencies} active={active} />
        <MainContent>{children}</MainContent>
      </AppWrapper>
    );
  }
}


export default graphql(GET_CURRENCIES)(Layout);
