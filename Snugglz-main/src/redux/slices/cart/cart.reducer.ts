import {
  addCartItem,
  clearCartItem,
  decrementCartItem,
  incrementCartItem,
} from "./cart.actions";
import { PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "./cart.type";

export const cartReducer = {
  addItemToCart: (
    state: ICartState,
    { payload }: PayloadAction<ICartItem>
  ): void => {
    state.cartItems = addCartItem(state.cartItems, payload);
  },
  removeItemFromCart: (
    state: ICartState,
    { payload }: PayloadAction<ICartItem>
  ): void => {
    state.cartItems = clearCartItem(state.cartItems, payload);
  },
  incrementCartItemQuantity: (
    state: ICartState,
    { payload }: PayloadAction<ICartItem>
  ): void => {
    state.cartItems = incrementCartItem(state.cartItems, payload);
  },
  decrementCartItemQuantity: (
    state: ICartState,
    action: PayloadAction<ICartItem>
  ): void => {
    state.cartItems = decrementCartItem(state.cartItems, action.payload);
  },
  setCartItems: (
    state: ICartState,
    action: PayloadAction<ICartItem[]>
  ): void => {
    state.cartItems = action.payload;
  },
  clearCart: (state: ICartState): void => {
    state.cartItems = [];
  },
  setCartDrawVisibilty: (
    state: ICartState,
    action: PayloadAction<boolean>
  ): void => {
    state.isCartOpen = action.payload;
  },
};
