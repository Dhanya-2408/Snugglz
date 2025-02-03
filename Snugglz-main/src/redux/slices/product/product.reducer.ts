import { fetchData } from "../../../services/axios";
import { initialAsyncData } from "../../../models/constants";
import { productService } from "../../../services/axiosServices";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../collection/collection.type";
import { IProductState, IProductVariants } from "./product.type";

export const fetchSingleProductAsync = createAsyncThunk(
  "product/getSingleProduct",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(productService.Products)) as any;
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const productReducer = {
  setSizechartVisibility: (
    state: IProductState,
    { payload }: PayloadAction<boolean>
  ): void => {
    state.isVisibleSizechart = payload;
  },
  setSelectedProduct: (
    state: IProductState,
    { payload }: PayloadAction<IProduct>
  ): void => {
    state.selectedProduct = {
      ...initialAsyncData,
      data: payload,
    };
  },
  setProductVariants: (
    state: IProductState,
    { payload }: PayloadAction<IProductVariants>
  ): void => {
    state.productVariants = payload;
  },
  setReviewEnabled: (
    state: IProductState,
    { payload }: PayloadAction<boolean>
  ): void => {
    state.isReviewEnabled = payload;
  },
};

export const extraProductReducer = {
  [fetchSingleProductAsync.pending.type]: (state: IProductState) => {
    state.selectedProduct.loading = true;
  },
  [fetchSingleProductAsync.fulfilled.type]: (
    state: IProductState,
    { payload }: PayloadAction<IProduct>
  ) => {
    state.selectedProduct.loading = false;
    state.selectedProduct.data = payload;
  },
  [fetchSingleProductAsync.rejected.type]: (state: IProductState) => {
    state.selectedProduct.loading = false;
    state.selectedProduct.error = "Error while fetching collections";
  },
};
