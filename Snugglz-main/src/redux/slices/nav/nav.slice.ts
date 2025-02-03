import { createSlice } from "@reduxjs/toolkit";
import { extraNavReducer, navReducer } from "./nav.reducer";
import { initialAsyncData } from "../../../models/constants";
import { INavState } from "./nav.type";

export const initialState: INavState = {
  categories: initialAsyncData,
  isMenuDrawHidden: true,
  isSearchDrawHidden: true,
  searchText: undefined,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: navReducer,
  extraReducers: extraNavReducer,
});

export const { setMenuDrawHidden, setSearchDrawHidden, setSearchText } =
  navSlice.actions;
