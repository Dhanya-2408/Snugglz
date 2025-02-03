import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import { extraProductReducer, productReducer } from "./product.reducer";
import { IProductState } from "./product.type";

export const initialState: IProductState = {
  isVisibleSizechart: false,
  selectedProduct: initialAsyncData,
  productVariants: undefined,
  isReviewEnabled: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: productReducer,
  extraReducers: extraProductReducer,
});

export const {
  setSizechartVisibility,
  setSelectedProduct,
  setProductVariants,
  setReviewEnabled,
} = productSlice.actions;
