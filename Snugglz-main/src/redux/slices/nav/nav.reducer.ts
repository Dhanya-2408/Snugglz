import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchData } from "../../../services/axios";
import { navService } from "../../../services/axiosServices";
import { IMainCategory, INavState } from "./nav.type";

export const fetchCategoriesAsync = createAsyncThunk(
  "nav/getMaincategory",
  async (_arg, { rejectWithValue }) => {
    try {
      const response = (await fetchData(navService.Maincategory)) as any;
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const navReducer = {
  setMenuDrawHidden: (
    state: INavState,
    { payload }: PayloadAction<boolean>
  ): void => {
    state.isMenuDrawHidden = payload;
  },
  setSearchDrawHidden: (
    state: INavState,
    { payload }: PayloadAction<boolean>
  ): void => {
    state.isSearchDrawHidden = payload;
  },
  setSearchText: (
    state: INavState,
    { payload }: PayloadAction<string | undefined>
  ): void => {
    state.searchText = payload;
  },
};

export const extraNavReducer = {
  [fetchCategoriesAsync.pending.type]: (state: INavState) => {
    state.categories.loading = true;
  },
  [fetchCategoriesAsync.fulfilled.type]: (
    state: INavState,
    { payload }: PayloadAction<Array<IMainCategory>>
  ) => {
    state.categories.loading = false;
    state.categories.data = payload;
  },
  [fetchCategoriesAsync.rejected.type]: (state: INavState) => {
    state.categories.loading = false;
    state.categories.error = "Error while fetching all categories";
  },
};
