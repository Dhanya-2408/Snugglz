import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const productSelf = (state: RootState) => state.collection;

export const allProducts = createSelector(
  [productSelf],
  (product) => product.allProducts
);

export const isSortEnabled = createSelector(
  [productSelf],
  (product) => product.isSortEnabled
);

export const isFilterEnabled = createSelector(
  [productSelf],
  (product) => product.isFilterEnabled
);

export const layoutType = createSelector(
  [productSelf],
  (product) => product.layoutType
);

export const selectedSorter = createSelector(
  [productSelf],
  (product) => product.selectedSorter
);

export const selectedFilters = createSelector(
  [productSelf],
  (product) => product.selectedFilters
);

export const groupedProducts = createSelector(
  [productSelf],
  (product) => product.groupedProducts
);
