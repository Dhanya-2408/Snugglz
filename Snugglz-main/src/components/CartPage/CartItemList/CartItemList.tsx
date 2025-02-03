import React from "react";
import { selectCartItems } from "../../../redux/slices/cart/cart.selector";
import { ICartItem } from "../../../redux/slices/cart/cart.type";
import { useAppSelector } from "../../../redux/store";
import { CartItem } from "./CartItem";
import "./CartItemList.scss";

export default function CartItemList() {
  const cartList = useAppSelector(selectCartItems);

  return (
    <div className="Cart__ItemList">
      <div className="Cart__Head hidden-phone">
        <span className="Cart__HeadItem Heading Text--subdued u-h7">
          Product
        </span>
        <span className="Cart__HeadItem"></span>
        <span
          className="Cart__HeadItem Heading Text--subdued u-h7"
          style={{ textAlign: "center" }}
        >
          Quantity
        </span>
        <span
          className="Cart__HeadItem Heading Text--subdued u-h7"
          style={{ textAlign: "right" }}
        >
          Total
        </span>
      </div>
      {cartList &&
        cartList.map((item: ICartItem) => (
          <CartItem key={`${item.name}-${item.size}`} cartItem={item} />
        ))}
    </div>
  );
}
