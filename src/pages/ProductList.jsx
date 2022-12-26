import React, { Component } from "react";
import { connect } from "react-redux";
import { graphql } from "@apollo/client/react/hoc";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { addToCart, removeFromCart } from "../redux/feature/cartSlice";
import { GET_PRODUCTS } from "../utils/queries";
import { CategoryTitle, ProductGrid } from "../utils/styledComponents";

class ProductList extends Component {
  // set active category
  componentDidMount() {
    let catName = this.props.categoryName;
    this.props.handleActiveCategory(catName);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.categoryName !== this.props.categoryName) {
      let catName = this.props.categoryName;
      this.props.handleActiveCategory(catName);
    }
  }
  render() {
    const { currency, addToCart, removeFromCart, cartItemIds, data } =
      this.props;
    const { category } = data;
    return (
      <div>
        <CategoryTitle>{category?.name}</CategoryTitle>
        <ProductGrid>
          {currency &&
            category?.products?.map((product) => (
              <Link to={`/${category?.name}/${product.id}`} key={product.id}>
                <ProductCard
                  product={product}
                  cartItemIds={cartItemIds}
                  addToCart={addToCart}
                  currency={currency}
                  removeFromCart={removeFromCart}
                />
              </Link>
            ))}
        </ProductGrid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    cartItemIds: state.cartItemIds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (product) => dispatch(removeFromCart(product)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  graphql(GET_PRODUCTS, {
    options: (props) => ({
      variables: {
        input: { title: props.categoryName },
      },
    }),
  })(ProductList)
);
