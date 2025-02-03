import { createSlice } from "@reduxjs/toolkit";
import { addressReducer } from "./address.reducer";
import { IAddressState } from "./address.type";

export const initialState: IAddressState = {
  addresses: [],
  openAddAddress: false,
  selectedAddressId: undefined,
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: addressReducer,
});

export const {
  setAddresses,
  addNewAddress,
  removeAddress,
  setOpenAddAddress,
  setDefaultAddress,
  setSelectedAddressId,
} = addressSlice.actions;
