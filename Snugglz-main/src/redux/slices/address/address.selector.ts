import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const selectAddressReducer = (state: RootState) => state.address;

export const selectAddresses = createSelector(
  [selectAddressReducer],
  (address) => address.addresses
);

export const selectOpenAddAddress = createSelector(
  [selectAddressReducer],
  (address) => address.openAddAddress
);

export const selectedAddressId = createSelector(
  [selectAddressReducer],
  (address) => address.selectedAddressId
);
