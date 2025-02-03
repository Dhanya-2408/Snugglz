import { ICartItem } from "./cart.type";

const getItemIndex = (state: ICartItem[], idToFind: ICartItem): number => {
  const ids = state.findIndex(
    (item) => item.id === idToFind.id && item.size === idToFind.size
  );
  return ids;
};

export const addCartItem = (
  cartItems: ICartItem[],
  productToAdd: ICartItem
) => {
  const itemIndex = getItemIndex(cartItems, productToAdd);

  if (itemIndex && itemIndex < 0) {
    cartItems.push({ ...productToAdd, quantity: productToAdd.quantity || 1 });
  } else cartItems[itemIndex].quantity += productToAdd.quantity;

  return cartItems;
};

export const clearCartItem = (
  cartItems: ICartItem[],
  cartItemToClear: ICartItem
) => {
  const itemIndex = getItemIndex(cartItems, cartItemToClear);
  return cartItems.filter((cartItem, index) => index !== itemIndex);
};

export const decrementCartItem = (
  cartItems: ICartItem[],
  cartItemToDecrease: ICartItem
) => {
  const itemIndex = getItemIndex(cartItems, cartItemToDecrease);

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (cartItems[itemIndex].quantity === 1) {
    cartItems = clearCartItem(cartItems, cartItemToDecrease);
  }

  // return back cartitems with matching cart item with reduced quantity
  else cartItems[itemIndex].quantity -= 1;

  return cartItems;
};

export const incrementCartItem = (
  cartItems: ICartItem[],
  cartItemToIncrease: ICartItem
) => {
  const itemIndex = getItemIndex(cartItems, cartItemToIncrease);
  cartItems[itemIndex].quantity += 1;
  return cartItems;
};
