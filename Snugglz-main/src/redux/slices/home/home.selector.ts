import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export const navSelf = (state: RootState) => state.home;

export const collection = createSelector(
  navSelf,
  (state) => state && state.collection
);

export const productCollection = createSelector(
  navSelf,
  (state) => state && state.productCollection
);
