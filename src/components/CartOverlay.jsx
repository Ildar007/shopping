import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleItemQuantity, removeFromCart } from "../redux/feature/cartSlice";
import {
  ActionButtonsWrapper,
  CartItemsWrapper,
  OverlayWrapper,
  Total,
} from "../utils/styledComponents";
import SingleCartItem from "./SingleCartItem";

class CartOverlay extends Component {
  render() {
    const {
      cart,
      currency,
      count,
      handleItemQuantity,
      toggle,
      cartRef,
      removeFromCart,
    } = this.props;
    let total = 0;
    cart?.map(({ qty, prices }) => {
      let price = prices.find((x) => x.currency.symbol === currency);
      return (total = total + price.amount * qty);
    });
    return (
      <OverlayWrapper ref={cartRef}>
        <h2>
          My Bag,{" "}
          <span>
            {count} item{count === 1 ? "" : "s"}
          </span>
        </h2>
        <CartItemsWrapper overlay={true}>
          {cart.length === 0 && (
            <p className="empty">
              Nothing to see here... <span>*inserts blowing breeze*</span>
            </p>
          )}
          {cart?.map(
              ({
                id,
                name,
                brand,
                prices,
                qty,
                gallery,
                attributes,
                category,
                product_id
              }) => {
                let price = prices.find((x) => x.currency.symbol === currency);
                return (
                  <SingleCartItem
                    key={id}
                    price={price}
                    id={id}
                    product_id={product_id}
                    currency={currency}
                    handleItemQuantity={handleItemQuantity}
                    name={name}
                    brand={brand}
                    qty={qty}
                    gallery={gallery}
                    attributes={attributes}
                    cart={cart}
                    overlay={true}
                    category={category}
                    removeFromCart={removeFromCart}
                    toggle={toggle}
                  />
                );
              }
            )}
        </CartItemsWrapper>
        <Total>
          <p>Total</p>
          <p>
            {currency}
            {total.toFixed(2)}
          </p>
        </Total>
        <ActionButtonsWrapper>
          <Link to="/cart">
            <button className="cart" onClick={toggle}>
              view bag
            </button>
          </Link>
          <button
            className="checkout"
            onClick={() => {
              toggle();
              alert("End of the road");
            }}
          >
            checkout
          </button>
        </ActionButtonsWrapper>
      </OverlayWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    currency: state.currency,
    qtyTotal: state.qtyTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleItemQuantity: (data) => dispatch(handleItemQuantity(data)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
