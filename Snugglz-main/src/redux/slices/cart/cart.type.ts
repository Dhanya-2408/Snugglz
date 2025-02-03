export interface ICartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  color: string;
  size: string;
}

export interface ICartState {
  cartItems: ICartItem[];
  isCartOpen: boolean;
}
