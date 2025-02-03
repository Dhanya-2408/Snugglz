import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import { extraWishlistReducer, wishlistReducer } from "./wishlist.reducer";
import { IWishlistState } from "./wishlist.type";

export const initialState: IWishlistState = {
  wishlistItems: initialAsyncData,
  isFavAddCartOpen: false,
  wishlistItem: undefined,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: wishlistReducer,
  extraReducers: extraWishlistReducer,
});

export const { addFavToCartOpen, setWishlistItem } = wishlistSlice.actions;
