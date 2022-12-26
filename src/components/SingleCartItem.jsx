import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  CartItem,
  ColorBtn,
  ControlLeft,
  ControlRight,
  Controls,
  ItemColors,
  ItemImgWrapper,
  ItemInfo,
  ItemSizes,
  QtyBtn,
  QtyWrapper,
  RemoveBtn,
  SizeBtn,
} from "../utils/styledComponents";

class SingleCartItem extends Component {
  constructor() {
    super();
    this.state = {
      selectedAttr: {},
      imgIndex: 0,
    };
  }
  //   check for selected attriutes on component mount
  componentDidMount() {
    let product = this.props.cart?.find((x) => x.id === this.props.id);
    this.setState({
      selectedAttr: product?.selected
        ? product?.selected
        : this.state.selectedAttr,
    });
  }
  //   check for selected attriutes on component update
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      let product = this.props.cart?.find((x) => x.id === this.props.id);
    this.setState({
      selectedAttr: product?.selected
        ? product?.selected
        : this.state.selectedAttr,
    });
    }
  }
  //   handle image slider
  changeImg(max, forward) {
    if (this.state.imgIndex === 0 && !forward) {
      this.setState({ ...this.state, imgIndex: max - 1 });
      return;
    }
    if (this.state.imgIndex === max - 1 && forward) {
      this.setState({ ...this.state, imgIndex: 0 });
      return;
    }
    if (forward) {
      this.setState({ ...this.state, imgIndex: this.state.imgIndex + 1 });
      return;
    } else {
      this.setState({ ...this.state, imgIndex: this.state.imgIndex - 1 });
      return;
    }
  }
  render() {
    const {
      id,
      product_id,
      brand,
      name,
      currency,
      price,
      qty,
      gallery,
      handleItemQuantity,
      attributes,
      category,
      overlay,
      removeFromCart,
      toggle
    } = this.props;
    const { selectedAttr, imgIndex } = this.state;
    return (
      <CartItem overlay={overlay}>
          <RemoveBtn onClick={() => removeFromCart(id)}>-</RemoveBtn>
        <ItemInfo overlay={overlay}>
          <Link to={`/${category}/${product_id}`} onClick={() => {
            toggle()
          }}>
            <div>
              <h2 className="brand">{brand}</h2>
              <h2 className="name">{name}</h2>
            </div>
          </Link>
          <p className="price">
            {currency}
            {(price.amount * qty).toFixed(2)}
          </p>
          {attributes.map((attr, i) => {
            return attr.id !== "Color" ? (
              <ItemSizes
                overlay={overlay}
                style={{ marginTop: i > 0 ? "20px" : "0" }}
                key={attr.id}
              >
                <h4>{attr.id}:</h4>
                <div>
                  {attr.items.map((item, i) => (
                    <SizeBtn
                      overlay={overlay}
                      selected={
                        selectedAttr[attr.id]
                          ? selectedAttr[attr.id] === item.id
                          : i === 0
                      }
                      key={item.id}
                    >
                      {item.value}
                    </SizeBtn>
                  ))}
                </div>
              </ItemSizes>
            ) : (
              <ItemColors
                overlay={overlay}
                style={{ marginTop: i > 0 ? "20px" : "0" }}
                colorsNo={attr.items.length}
                key={attr.id}
              >
                <h4>{attr.id}:</h4>
                <div>
                  {attr.items.map((item, i) => (
                    <ColorBtn
                      overlay={overlay}
                      color={item.value}
                      selected={
                        selectedAttr[attr.id]
                          ? selectedAttr[attr.id] === item.id
                          : i === 0
                      }
                      key={item.id}
                    ></ColorBtn>
                  ))}
                </div>
              </ItemColors>
            );
          })}
        </ItemInfo>
        <ItemImgWrapper overlay={overlay}>
          <QtyWrapper overlay={overlay}>
            <QtyBtn
              overlay={overlay}
              onClick={() => handleItemQuantity({ id, add: true })}
            >
              +
            </QtyBtn>
            <p>{qty}</p>
            <QtyBtn
              overlay={overlay}
              onClick={() => handleItemQuantity({ id, subtract: true })}
            >
              -
            </QtyBtn>
          </QtyWrapper>
          <figure>
            <img src={gallery[imgIndex]} alt="" />
            {gallery.length > 1 && (
              <Controls overlay={overlay}>
                <ControlLeft onClick={() => this.changeImg(gallery.length)}>
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.25 1.06857L1.625 6.6876L7.25 12.3066"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ControlLeft>
                <ControlRight
                  onClick={() => this.changeImg(gallery.length, true)}
                >
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 1.06857L6.375 6.6876L0.75 12.3066"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ControlRight>
              </Controls>
            )}
          </figure>
        </ItemImgWrapper>
      </CartItem>
    );
  }
}


export default SingleCartItem;
