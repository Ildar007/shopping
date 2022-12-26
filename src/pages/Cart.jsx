import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SingleCartItem from "../components/SingleCartItem";
import {
  clearCart,
  handleItemQuantity,
  removeFromCart,
} from "../redux/feature/cartSlice";
import {
  CartHeading,
  CartItemsWrapper,
  CartSummary,
  ClearCart,
  EmptyStateText,
  OrderBtn,
} from "../utils/styledComponents";

class Cart extends Component {
  render() {
    const {
      cart,
      currency,
      qtyTotal,
      handleItemQuantity,
      removeFromCart,
      clearCart,
    } = this.props;
    let total = 0;
    cart.map(({ qty, prices }) => {
      let price = prices.find((x) => x.currency.symbol === currency);
      return (total = total + price.amount * qty);
    });
    return (
      <div>
        <CartHeading>Cart</CartHeading>
        {/* empty state */}
        {cart.length === 0 && (
          <EmptyStateText>
            Your cart is empty.{" "}
            <Link to="/">
              <span>Go to shop</span>
            </Link>
          </EmptyStateText>
        )}
        <CartItemsWrapper>
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
              selected,
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
                  category={category}
                  removeFromCart={removeFromCart}
                  selected={selected}
                />
              );
            }
          )}
        </CartItemsWrapper>
        {cart.length > 0 && (
          <ClearCart onClick={clearCart}>Clear Cart</ClearCart>
        )}
        <CartSummary>
          <p>
            Tax 21%:
            <span>
              {currency}
              {(total * 0.21).toFixed(2)}
            </span>
          </p>
          <p>
            Quantity: <span>{qtyTotal}</span>
          </p>
          <p>
            Total:{" "}
            <span>
              {currency}
              {total.toFixed(2)}
            </span>
          </p>
          {cart.length !== 0 && (
            <OrderBtn onClick={() => alert("End of the line 😇")}>
              order
            </OrderBtn>
          )}
        </CartSummary>
      </div>
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
    clearCart: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
