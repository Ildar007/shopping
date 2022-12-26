import styled, { keyframes } from "styled-components";
import { colors, screens, spacing } from "../styles/_vars";

// for layout
export const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 1600px;
`;
export const MainContent = styled.main`
  padding: 0 ${spacing.lg};
  @media (max-width: ${screens.lg}) {
    padding: 0 ${spacing.md};
  }
  @media (max-width: ${screens.sm}) {
    padding: 0 ${spacing.sm};
  }
`;

// for navbar
export const NavWrapper = styled.nav`
  width: 100%;
  max-width: 1600px;
  position: fixed;
  padding: 30px ${spacing.lg} 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  justify-content: space-between;
  background: #fff;
  z-index: 500;
  @media (max-width: ${screens.lg}) {
    padding: 30px ${spacing.md} 0;
  }
  @media (max-width: ${screens.med}) {
    align-items: center;
    padding: 30px ${spacing.md};
  }
  @media (max-width: ${screens.sm}) {
    padding: 20px ${spacing.sm};
  }

  p {
    cursor: pointer;
  }
`;

export const MenuBar = styled.div`
  display: none;
  position: relative;
  z-index: 100;
  @media (max-width: ${screens.med}) {
    display: flex;
    flex-direction: column;
    div {
      width: 30px;
      height: 2.5px;
      background: ${colors.primary};
      border-radius: 4px;
      transition: transform 0.4s ease-in-out;
    }
    div:first-child {
      margin-bottom: ${(props) => (props.isMenuOpen ? "-2px" : "4px")};
      transform: rotate(${(props) => (props.isMenuOpen ? "45deg" : "0")});
    }
    div:last-child {
      transform: rotate(${(props) => (props.isMenuOpen ? "-45deg" : "0")});
    }
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  @media (max-width: ${screens.med}) {
    position: fixed;
    left: ${(props) => (props.isMenuOpen ? "0" : "-45%")};
    top: 0;
    background: #fff;
    flex-direction: column;
    width: 50%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    transition: left 0.4s ease-in-out;
    box-shadow: ${(props) =>
      props.isMenuOpen ? "0px 4px 35px rgba(168, 172, 176, 0.24)" : ""};
  }
`;
export const CategoryListItem = styled.li`
  padding: 0px 15px 30px;
  position: relative;
  color: ${(props) => (props.active ? colors.primary : colors.dark)};
  font-weight: ${(props) => (props.active ? "500" : "400")};
  cursor: pointer;
  @media (max-width: ${screens.med}) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${colors.primary};
    height: 2px;
    width: 100%;
    border-radius: 5px;
    opacity: ${(props) => (props.active ? "1" : "0")};
    transition: opacity 0.2s ease-in-out;
  }
`;

export const CurrencyCartWrapper = styled.div`
  display: flex;
  justify-content: end;
  font-size: 17px;
  font-weight: 500;

  .content {
    display: inline-flex;
    align-items: start;
    position: relative;
  }
`;

export const LogoWrapper = styled.div`
  margin-top: -5px;
  display: flex;
  justify-content: center;

  img {
    width: 40px;
    @media (max-width: ${screens.sm}) {
      width: 30px;
    }
  }
`;
export const Cart = styled.figure`
  margin-left: 25px;

  cursor: pointer;
  position: relative;
  img {
    width: 20px;
  }

  &::before {
    visibility: ${(props) => (props.count === 0 ? "hidden" : "visible")};
    position: absolute;
    top: -11px;
    right: -10px;
    content: "${(props) => props.count}";
    background: #000;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    padding-bottom: 2px;
    display: grid;
    place-items: center;
    font-size: 14px;
    @media (max-width: ${screens.sm}) {
      font-size: 12px;
    }
  }
`;

export const DropdownArrow = styled.svg`
  transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  margin-left: 8px;
  transition: transform 0.1s ease-in-out;
`;

export const CurrencyDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.24));
  background: #fff;
  padding: 20px 0;
  width: 170%;
  margin-top: 10px;
  ul {
    list-style: none;
    li {
      padding: 10px 25px;
      cursor: pointer;
      &:hover {
        background: #eeeeee;
      }
    }
  }
`;

// for product list page
export const CategoryTitle = styled.h1`
  font-size: 40px;
  text-transform: capitalize;
  font-weight: 400;
  @media (max-width: ${screens.md}) {
    font-size: 30px;
  }
`;
export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 100px;
  margin-top: ${spacing.lg};
  padding-bottom: ${spacing.lg};

  a {
    all: unset;
  }

  @media (max-width: ${screens.xl}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${screens.md}) {
    grid-template-columns: 1fr;
  }
`;
export const Product = styled.div`
  padding: 15px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  background: #fff;
  position: relative;

  button {
    opacity: 0;
  }
  figure {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: start;
    }
  }
  .name {
    margin: 20px 0 5px 0;
    font-size: 15px;
    font-weight: 200;
  }
  .price {
    font-size: 15px;
    font-weight: 500;
  }
  ${(props) =>
    props.inStock
      ? `&:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    
        button {
          opacity: 1;
        }
      }`
      : ""}
  ${(props) =>
    !props.inStock
      ? `&::after {
          top: 0;
          left: 0;
            width: 100%;
            height: 100%;
            content: "OUT OF STOCK";
            position: absolute;
            background: #fff7;
            color: #8D8F9A;
            font-size: 22px;
            display: grid;
            place-items: center;
          }`
      : ""}
`;

export const AddToCartBtn = styled.button`
  all: unset;
  width: 45px;
  height: 45px;
  background: ${(props) =>
    props.added ? colors.primary_deep : colors.primary};
  border-radius: 50%;
  position: absolute;
  right: 20px;
  bottom: -20px;
  filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
  display: grid;
  place-items: center;
  transition: opacity 0.1s ease-in-out;
`;

// for product description page
export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${screens.lg}) {
    flex-direction: column;
    margin-bottom: ${spacing.lg};
  }
`;

export const ProductImagesWrapper = styled.div`
  width: 60%;
  display: flex;
  @media (max-width: ${screens.lg}) {
    width: 100%;
  }
`;

export const ProductMiniImagesWrapper = styled.div`
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: ${screens.sm}) {
    max-height: 400px;
  }
`;

export const SmallImg = styled.figure`
  width: 75px;
  margin-bottom: 35px;
  border: 1px solid
    ${(props) => (props.selected ? colors.primary : "transparent")};
  cursor: pointer;

  img {
    width: 100%;
  }
  @media (max-width: ${screens.lg}) {
    width: 50px;
  }
  @media (max-width: ${screens.sm}) {
    width: 45px;
  }
`;

export const LargeImg = styled.figure`
  width: 82%;
  margin-left: 30px;
  img {
    width: 100%;
  }
`;

export const ProductContent = styled.div`
  width: 33%;
  padding-right: ${spacing.lg};

  @media (max-width: ${screens.lg}) {
    width: 100%;
  }
  @media (max-width: ${screens.sm}) {
    padding-right: 0;
  }

  .brand,
  .name {
    font-size: 27px;
    @media (max-width: ${screens.lg}) {
      font-size: 24px;
    }
    @media (max-width: ${screens.sm}) {
      font-size: 22px;
    }
  }
  .brand {
    font-weight: 600;
    margin-bottom: 7px;
  }
  .name {
    font-weight: 400;
  }
  .desc {
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
  }
`;

export const ProductSizes = styled.div`
  margin-top: 30px;
  h4 {
    font-family: Roboto Condensed;
    text-transform: uppercase;
    @media (max-width: ${screens.lg}) {
      font-size: 14px;
    }
    @media (max-width: ${screens.sm}) {
      font-size: 13px;
    }
  }
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    margin-top: 8px;
  }
`;

export const SizeBtn = styled.button`
  all: unset;
  font-family: Source Sans Pro;
  border: 1px solid ${colors.dark};
  color: ${(props) => (props.selected ? "#fff" : colors.dark)};
  background: ${(props) => (props.selected ? colors.dark : "transparent")};
  padding: 10px 0;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  font-size: ${(props) => (props.overlay ? "9px" : "14px")};
  cursor: pointer;
  ${(props) =>
    props.overlay
      ? ""
      : `
  @media (max-width: ${screens.lg}) {
    font-size: 13px;
  }
  @media (max-width: ${screens.sm}) {
    font-size: 12px;
  }
  `}
`;

export const ProductColors = styled.div`
  margin-top: 20px;
  h4 {
    font-family: Roboto Condensed;
    text-transform: uppercase;
    @media (max-width: ${screens.lg}) {
      font-size: 14px;
    }
    @media (max-width: ${screens.sm}) {
      font-size: 13px;
    }
  }
  div {
    display: grid;
    grid-template-columns: repeat(${(props) => props.colorsNo}, 32px);
    grid-gap: 10px;
    margin-top: 8px;
  }
`;

export const ColorBtn = styled.button`
  all: unset;
  background: ${(props) => props.color};
  border: 1px solid
    ${(props) => (props.selected ? colors.primary : "transparent")};
  height: ${(props) => (props.overlay ? "20px" : "32px")};
  cursor: pointer;
`;

export const ProductPriceWrapper = styled.div`
  margin: 34px 0 20px;
  h4 {
    font-family: Roboto Condensed;
    @media (max-width: ${screens.lg}) {
      font-size: 15px;
    }
    @media (max-width: ${screens.sm}) {
      font-size: 14px;
    }
  }
  p {
    font-weight: 700;
    font-size: 21px;
    margin-top: 12px;
    @media (max-width: ${screens.lg}) {
      font-size: 20px;
    }
    @media (max-width: ${screens.sm}) {
      font-size: 18px;
    }
  }
`;

export const AddToCart = styled.button`
  all: unset;
  background: ${(props) => (props.outOfStock ? colors.gray : colors.primary)};
  color: ${(props) => (props.outOfStock ? colors.dark : "#fff")};
  text-transform: uppercase;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 40px;
  cursor: pointer;
`;

// for cart page
export const RemoveBtn = styled.button`
  all: unset;
  position: absolute;
  right: 0;
  top: 1px;
  background: ${colors.dark};
  color: #fff;
  padding: 0 4px;
  cursor: pointer;
  font-size: 16px;
`;
export const CartHeading = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 24px;
  text-transform: uppercase;
`;
export const CartItemsWrapper = styled.div`
  border-top: 1px solid
    ${(props) => (props.overlay ? "transparent" : "#e5e5e5")};
  margin-top: ${(props) => (props.overlay ? "0" : "50px")};
  max-height: ${(props) => (props.overlay ? "400px" : "auto")};
  overflow-y: auto;

  .brand,
  .name {
    width: ${(props) => (props.overlay ? "50px" : "auto")};
    font-size: ${(props) => (props.overlay ? "14px" : "27px")};
    ${(props) =>
      props.overlay
        ? ""
        : `
    @media (max-width: ${screens.lg}) {
        font-size: 24px;
      }
      @media (max-width: ${screens.sm}) {
        font-size: 22px;
      }
    `}
  }
  .brand {
    font-weight: 600;
    margin-bottom: 7px;
  }
  .name {
    font-weight: 400;
  }
  .price {
    font-weight: 700;
    font-size: ${(props) => (props.overlay ? "14px" : "22px")};
    margin: ${(props) => (props.overlay ? "10px 0" : "15px 0")};
    ${(props) =>
      props.overlay
        ? ""
        : `
    @media (max-width: ${screens.lg}) {
        font-size: 20px;
      }
      @media (max-width: ${screens.sm}) {
        font-size: 18px;
      }
    `}
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: ${(props) => (props.overlay ? "18px" : "24px")} 0;
  border-bottom: 1px solid
    ${(props) => (props.overlay ? "transparent" : "#e5e5e5")};
  ${(props) =>
    props.overlay
      ? ""
      : ` @media (max-width: ${screens.med}) {
        flex-direction: column;
      }`}
`;

export const ItemInfo = styled.div`
  width: ${(props) => (props.overlay ? "150px" : "234px")};
  h4 {
    ${(props) =>
      props.overlay
        ? `
      font-size: 13px;
      font-weight: 500;
      `
        : ""}
  }
  ${(props) =>
    props.overlay
      ? ""
      : `
  @media (max-width: ${screens.med}) {
    margin-bottom: 40px;
    width: 100%;
  }
  `}
`;

export const ItemSizes = styled(ProductSizes)`
  margin: 0;
  div {
    ${(props) =>
      props.overlay
        ? `
    grid-template-columns: repeat(5, 25px);
    grid-gap: 3px;
    `
        : ""}
  }
`;
export const ItemColors = styled(ProductColors)`
  margin: 10px 0 0;
  div {
    ${(props) =>
      props.overlay
        ? `
      grid-template-columns: repeat(4, 20px);
      grid-gap: 3px;
      height: 20px;
      `
        : ""}
  }
`;

export const ItemImgWrapper = styled.div`
  display: flex;
  figure {
    width: ${(props) => (props.overlay ? "80px" : "180px")};
    height: 100%;
    position: relative;
    ${(props) =>
      props.overlay
        ? ""
        : `
    @media (max-width: ${screens.med}) {
        width: auto;
      }`}

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  ${(props) =>
    props.overlay
      ? ""
      : `
  @media (max-width: ${screens.med}) {
    width: 100%;
    flex-direction: column-reverse;
  }`}
`;

export const QtyWrapper = styled.div`
  margin-right: ${(props) => (props.overlay ? "15px" : "25px")};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    props.overlay
      ? ""
      : ` @media (max-width: ${screens.med}) {
    width: 100%;
    flex-direction: row;
    margin-top: 15px;
  }`}

  p {
    font-weight: 500;
    font-size: ${(props) => (props.overlay ? "14px" : "22px")};
  }
`;

export const QtyBtn = styled(SizeBtn)`
  width: ${(props) => (props.overlay ? "25px" : "40px")};
  font-size: ${(props) => (props.overlay ? "25px" : "45px")};
  ${(props) => (props.overlay ? `padding: 5px 0px` : "")};
  font-weight: 100;
  font-family: Raleway;
  height: ${(props) => (props.overlay ? "14px" : "20px")};
  line-height: 0px;
  display: grid;
  place-items: center;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: ${colors.dark};
    color: #fff;
  }
`;

export const Controls = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: ${(props) => (props.overlay ? "scale(.8)" : "scale(1)")};
`;

export const ControlLeft = styled.button`
  all: unset;
  background: ${colors.dark}99;
  padding: 4px 8px 3px;
`;

export const ControlRight = styled(ControlLeft)`
  margin-left: 7px;
`;

export const CartSummary = styled.div`
  width: 240px;
  margin: 30px 0 150px;
  font-size: 21px;
  @media (max-width: ${screens.sm}) {
    width: 100%;
  }
  p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      font-weight: 700;
      width: 145px;
    }
  }
  p:last-child {
    font-weight: 500;
  }
`;

export const ClearCart = styled.button`
  all: unset;
  color: red;
  float: right;
  margin: 10px 0 20px;
  cursor: pointer;
  font-weight: 600;
`;

export const OrderBtn = styled.button`
  all: unset;
  width: 100%;
  background: ${colors.primary};
  color: #fff;
  text-transform: uppercase;
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 12px;
  padding: 10px 0;
  margin-top: 20px;
  cursor: pointer;
`;

export const EmptyStateText = styled.p`
  text-align: center;
  font-weight: 600;
  margin: ${spacing.lg} 0;
  a {
    color: ${colors.primary};
    cursor: pointer;
  }
`;

// loading state
const animate = keyframes`{
    from {opacity: .1;}
    to {opacity: .6;}
}`;

export const LoadingStateWrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 21px;
    height: 21px;
    transition: opacity ease 0.6s;
    background: ${colors.primary};
    border-radius: 50%;
    animation: ${animate} 0.6s infinite alternate;
  }
  .second {
    animation-delay: 0.05s;
    margin-left: 2px;
  }
  .last {
    animation-delay: 0.1s;
    margin-left: 2px;
  }
`;

// cart overlay
export const OverlayWrapper = styled.div`
  position: absolute;
  background: #fff;
  box-shadow: 0 5000px 0 5000px rgba(57, 55, 72, 0.22);
  padding: 10px 20px 20px;
  top: 100%;
  width: 300px;
  right: 90px;
  overflow-y: scroll;
  @media (max-width: ${screens.lg}) {
    right: ${spacing.md};
  }
  @media (max-width: ${screens.med}) {
    right: ${spacing.md};
  }
  @media (max-width: ${screens.sm}) {
    right: 0;
  }
  h2 {
    font-size: 14px;
    span {
      font-weight: 400;
    }
  }
  .empty {
    text-align: center;
    font-size: 12px;
    margin: 20px 0;
    span {
      color: ${colors.primary_deep};
    }
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  margin: 10px 0 20px;
`;

export const ActionButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  button {
    all: unset;
    text-transform: uppercase;
    font-size: 13px;
    display: flex;
    justify-content: center;
    font-weight: 500;
    padding: 8px 0;
  }
  a .cart {
    border: 1px solid ${colors.dark};
    width: 100%;
  }
  .checkout {
    background: ${colors.primary};
    color: #fff;
  }
`;
