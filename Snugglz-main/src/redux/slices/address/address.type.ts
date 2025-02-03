export interface IAddress {
  id: string;
  name: string;
  phone: string;
  email: string;
  locality: string;
  pincode: string;
  state: string;
  city: string;
  isDefault: boolean;
  address: string;
  landmark: string;
}

export interface IAddressState {
  addresses: IAddress[];
  openAddAddress: boolean;
  selectedAddressId: string | undefined;
}
