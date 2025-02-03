import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const favSelf = (state: RootState) => state.wishlist;

export const wishlistItems = createSelector(
  [favSelf],
  (product) => product.wishlistItems
);

export const wishlistItem = createSelector(
  [favSelf],
  (product) => product.wishlistItem
);

export const isFavAddCartOpen = createSelector(
  [favSelf],
  (product) => product.isFavAddCartOpen
);
