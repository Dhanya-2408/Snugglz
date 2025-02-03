import { createSlice } from "@reduxjs/toolkit";
import { orderReducer } from "./order.reducer";
import { IOrderState } from "./order.type";

export const initialState: IOrderState = {
  orderItems: [],
  addressId: "",
  totalAmount: 0,
  orderDetails: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: orderReducer,
});
