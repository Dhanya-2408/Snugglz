import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { fetchData } from "../../../services/axios";
import { homeService } from "../../../services/axiosServices";
import { getUniqueBy } from "../../../utils/generics";
import { IProduct } from "../collection/collection.type";
import {
  CollectionEnum,
  ICollection,
  IHomeState,
  ProductsEnum,
} from "./home.type";

export const fetchCollectionAsync = createAsyncThunk<
  Array<ICollection>,
  CollectionEnum
>("home/getCollection", async (type, { rejectWithValue }) => {
  try {
    const response = (await fetchData({
      ...homeService.Collection,
      params: { type },
    })) as AxiosResponse;
    return response.data;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const fetchProductCollection = createAsyncThunk<
  {
    key: ProductsEnum;
    value: IProduct[];
  },
  ProductsEnum
>("home/getProductCollection", async (type, { rejectWithValue }) => {
  try {
    const response = (await fetchData({
      ...homeService.getHomeProducts,
      params: { type },
    })) as any;

    return { key: type, value: response.data };
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const homeReducer = {};

export const extraHomeReducer = {
  [fetchCollectionAsync.pending.type]: (state: IHomeState) => {
    state.collection.loading = true;
  },
  [fetchCollectionAsync.fulfilled.type]: (
    state: IHomeState,
    { payload }: PayloadAction<Array<ICollection>>
  ) => {
    state.collection.loading = false;
    const data = state.collection.data || [];
    const groupedValue = [...data, ...payload];
    state.collection.data = getUniqueBy(groupedValue, "id");
  },
  [fetchCollectionAsync.rejected.type]: (state: IHomeState) => {
    state.collection.loading = false;
    state.collection.error = "Error while fetching collection data";
  },

  [fetchProductCollection.pending.type]: (state: IHomeState) => {
    state.productCollection.loading = true;
  },
  [fetchProductCollection.fulfilled.type]: (
    state: IHomeState,
    {
      payload,
    }: PayloadAction<{
      key: ProductsEnum;
      value: IProduct[];
    }>
  ) => {
    const data = state.productCollection.data || {};
    const groupedProducts = {
      ...data,
      [payload.key]: payload.value,
    };
    state.productCollection.loading = false;
    state.productCollection.data = groupedProducts as any;
  },
  [fetchProductCollection.pending.type]: (state: IHomeState) => {
    state.productCollection.loading = false;
    state.productCollection.error =
      "Error while fetching home screen product collection";
  },
};
