export interface IOrderItem {
  id: number;
  quantity: number;
  price: number;
  sizeId: string;
  colorId: string;
}

export interface IOrderState {
  orderItems: IOrderItem[];
  addressId: string;
  totalAmount: number;
  orderDetails: [];
}
