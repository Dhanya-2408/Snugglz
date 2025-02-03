import { AsyncData } from "../../../models/types";

export enum profileMenu {
  "home" = "Profile Home",
  "profile" = "My Profile",
  "orders" = "My Orders",
  "address" = "My Address",
  "coupons" = "My Coupons",
  "rewards" = "My Rewards"
}

export interface ICustomer {
  customerid: number;
  customername: string;
  dob: string;
  email: string;
  enable: boolean;
  gender: string;
  image: string;
  otp: string;
  password: string;
  phone: string;
  points: number;
  refferalcode: string;
  refferedby: string;
}

export interface IProfileState {
  profilePage: profileMenu;
  customer: AsyncData<ICustomer>;
}
