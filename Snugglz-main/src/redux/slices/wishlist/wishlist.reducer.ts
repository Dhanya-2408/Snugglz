import { AxiosResponse } from "axios";
import { IWishlistState } from "./wishlist.type";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../collection/collection.type";
import { fetchData } from "../../../services/axios";
import { favService } from "../../../services/axiosServices";
import toastMessage from "../../../utils/toastMessage";

export const addFavAsync = createAsyncThunk<any, any>(
  "fav/addToFav",
  async (data, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...favService.addFavourites,
        params: { ...data },
      })) as AxiosResponse;
      toastMessage("Updated Wishlist", "success");
      return response.data;
    } catch (err) {
      toastMessage("Something went wrong, Try again", "error");
      return rejectWithValue(err);
    }
  }
);

export const getFavAsync = createAsyncThunk<any, any>(
  "fav/getFav",
  async (data, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...favService.getFavourites,
        params: { ...data },
      })) as AxiosResponse;
      console.log(data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const extraWishlistReducer = {
  [getFavAsync.pending.type]: (state: IWishlistState) => {
    state.wishlistItems.loading = true;
  },
  [getFavAsync.fulfilled.type]: (
    state: IWishlistState,
    { payload }: PayloadAction<Array<IProduct>>
  ) => {
    state.wishlistItems.loading = false;
    state.wishlistItems.data = payload;
  },
  [getFavAsync.rejected.type]: (state: IWishlistState) => {
    state.wishlistItems.loading = false;
    state.wishlistItems.error = "Error while fetching collections";
  },
};

export const wishlistReducer = {
  addFavToCartOpen: (
    state: IWishlistState,
    { payload }: PayloadAction<boolean>
  ) => {
    state.isFavAddCartOpen = payload;
  },
  setWishlistItem: (
    state: IWishlistState,
    { payload }: PayloadAction<IProduct | undefined>
  ) => {
    state.wishlistItem = payload;
  },
};
