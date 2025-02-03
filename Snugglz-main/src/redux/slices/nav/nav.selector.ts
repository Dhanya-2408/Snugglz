import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const navSelf = (state: RootState) => state.nav;

export const categories = createSelector(
  navSelf,
  (state) => state && state.categories
);

export const isSearchDrawHidden = createSelector(
  navSelf,
  (state) => state && state.isSearchDrawHidden
);

export const isMenuDrawHidden = createSelector(
  navSelf,
  (state) => state && state.isMenuDrawHidden
);

export const searchText = createSelector(
  navSelf,
  (state) => state && state.searchText
);
