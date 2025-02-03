import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const productSelf = (state: RootState) => state.product;

export const selectedProduct = createSelector(
  [productSelf],
  (productState) => productState.selectedProduct
);

export const isVisibleSizechart = createSelector(
  [productSelf],
  (productState) => productState.isVisibleSizechart
);

export const productVariants = createSelector(
  [productSelf],
  (productState) => productState.productVariants
);

export const isReviewEnabled = createSelector(
  [productSelf],
  (productState) => productState.isReviewEnabled
);
