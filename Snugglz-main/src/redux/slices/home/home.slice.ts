import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import { extraHomeReducer, homeReducer } from "./home.reducer";
import { IHomeState } from "./home.type";

export const initialState: IHomeState = {
  collection: initialAsyncData,
  productCollection: initialAsyncData,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: homeReducer,
  extraReducers: extraHomeReducer,
});
