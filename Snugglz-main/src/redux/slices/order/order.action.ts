import { ICartItem } from "./../cart/cart.type";
import { pick } from "../../../utils/generics";

export const setOrderItems = (cartItems: ICartItem[]) => {
  // let orderItems: IOrderItem[] = [];
  if (cartItems) {
    cartItems.forEach((item: ICartItem) => {
      return pick(item, ["id", "quantity", "price", "size", "color"]);
    });
  }
};
