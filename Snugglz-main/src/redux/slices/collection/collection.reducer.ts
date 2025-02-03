import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/axios";
import { productService } from "../../../services/axiosServices";
import {
  IProduct,
  ICollectionState,
  ISelectedFilters,
  ISortCollection,
  LayoutType,
} from "./collection.type";

export const fetchAllProductsAsync = createAsyncThunk(
  "collection/getAllProducts",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(productService.Products)) as any;
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const collectionReducer = {
  setLayoutType: (
    state: ICollectionState,
    { payload }: PayloadAction<LayoutType>
  ): void => {
    state.layoutType = payload;
  },
  setSelectedSorter: (
    state: ICollectionState,
    { payload }: PayloadAction<ISortCollection | undefined>
  ): void => {
    state.selectedSorter = payload;
  },
  setSelectedFilters: (
    state: ICollectionState,
    { payload }: PayloadAction<ISelectedFilters | undefined>
  ): void => {
    state.selectedFilters = payload;
  },
  setSorterVisibility: (
    state: ICollectionState,
    { payload }: PayloadAction<boolean>
  ): void => {
    state.isSortEnabled = payload;
  },
  setFilterVisibility: (
    state: ICollectionState,
    { payload }: PayloadAction<boolean>
  ): void => {
    state.isFilterEnabled = payload;
  },
  setGroupedProducts: (
    state: ICollectionState,
    { payload }: PayloadAction<Array<IProduct>>
  ): void => {
    state.groupedProducts = payload;
  },
};

export const extracollectionReducer = {
  [fetchAllProductsAsync.pending.type]: (state: ICollectionState) => {
    state.allProducts.loading = true;
  },
  [fetchAllProductsAsync.fulfilled.type]: (
    state: ICollectionState,
    { payload }: PayloadAction<Array<IProduct>>
  ) => {
    state.allProducts.loading = false;
    state.allProducts.data = payload;
  },
  [fetchAllProductsAsync.rejected.type]: (state: ICollectionState) => {
    state.allProducts.loading = false;
    state.allProducts.error = "Error while fetching collections";
  },
};
