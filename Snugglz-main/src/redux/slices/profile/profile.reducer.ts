import { AxiosResponse } from "axios";
import { fetchData } from "../../../services/axios";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { profileService } from "../../../services/axiosServices";
import { ICustomer, IProfileState, profileMenu } from "./profile.type";

export const fetchCustomerAsync = createAsyncThunk<ICustomer, string>(
  "profile/getCustomer",
  async (email, { rejectWithValue }) => {
    try {
      const response = (await fetchData({
        ...profileService.getCustomerbyIdEmail,
        params: { email },
      })) as AxiosResponse;
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const profileReducer = {
  setProfilePage: (
    state: IProfileState,
    { payload }: PayloadAction<profileMenu>
  ): void => {
    state.profilePage = payload;
  },
};

export const extraProfileReducer = {
  [fetchCustomerAsync.pending.type]: (state: IProfileState) => {
    state.customer.loading = true;
  },
  [fetchCustomerAsync.fulfilled.type]: (
    state: IProfileState,
    { payload }: PayloadAction<ICustomer>
  ) => {
    state.customer.loading = false;
    state.customer.data = payload;
  },
  [fetchCustomerAsync.rejected.type]: (state: IProfileState) => {
    state.customer.loading = false;
    state.customer.error = "Error while fetching customer data";
  },
};
