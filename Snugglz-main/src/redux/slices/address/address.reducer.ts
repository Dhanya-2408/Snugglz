import { PayloadAction } from "@reduxjs/toolkit";
import { IAddress, IAddressState } from "./address.type";

export const addressReducer = {
  addNewAddress: (
    state: IAddressState,
    { payload }: PayloadAction<IAddress>
  ) => {
    let addressList = [...state.addresses];
    let addressToAdd = payload;
    let exist = addressList.find((item) => item.id === addressToAdd.id);

    if (exist) {
      state.addresses = addressList.map((item) => {
        if (item.id === addressToAdd.id) return { ...payload };
        else return item;
      });
    } else {
      state.addresses = [...addressList, addressToAdd];
    }
  },

  removeAddress: (
    state: IAddressState,
    { payload: addressId }: PayloadAction<string>
  ) => {
    state.addresses = state.addresses.filter(
      (address) => address.id !== addressId
    );
  },
  setAddresses: (
    state: IAddressState,
    { payload: addresses }: PayloadAction<Array<IAddress>>
  ) => {
    state.addresses = addresses;
  },

  setDefaultAddress: (
    state: IAddressState,
    { payload: addressId }: PayloadAction<string>
  ) => {
    state.addresses = state.addresses.map((item) => {
      return { ...item, isDefault: item.id === addressId ? true : false };
    });
  },

  setOpenAddAddress: (
    state: IAddressState,
    { payload }: PayloadAction<boolean>
  ) => {
    state.openAddAddress = payload;
  },
  setSelectedAddressId: (
    state: IAddressState,
    { payload }: PayloadAction<string | undefined>
  ) => {
    state.selectedAddressId = payload;
  },
};
