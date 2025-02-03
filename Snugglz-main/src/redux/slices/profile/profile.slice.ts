import { createSlice } from "@reduxjs/toolkit";
import { initialAsyncData } from "../../../models/constants";
import { extraProfileReducer, profileReducer } from "./profile.reducer";
import { IProfileState, profileMenu } from "./profile.type";

export const initialState: IProfileState = {
  profilePage: profileMenu.home,
  customer: initialAsyncData,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: profileReducer,
  extraReducers: extraProfileReducer,
});

export const { setProfilePage } = profileSlice.actions;
