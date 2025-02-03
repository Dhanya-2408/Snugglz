import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import {
  collectionReducer,
  extracollectionReducer,
} from "./collection.reducer";
import { ICollectionState, LayoutType } from "./collection.type";

export const initialState: ICollectionState = {
  layoutType: LayoutType.Multi,
  isSortEnabled: false,
  isFilterEnabled: false,
  selectedSorter: undefined,
  selectedFilters: undefined,
  allProducts: initialAsyncData,
  groupedProducts: undefined,
};

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: collectionReducer,
  extraReducers: extracollectionReducer,
});

export const {
  setLayoutType,
  setSelectedSorter,
  setSelectedFilters,
  setSorterVisibility,
  setFilterVisibility,
  setGroupedProducts,
} = collectionSlice.actions;
