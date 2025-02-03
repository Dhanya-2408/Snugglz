import { AsyncData } from "../../../models/types";
import { IProduct } from "../collection/collection.type";

export interface IWishlistState {
  isFavAddCartOpen: boolean;
  wishlistItems: AsyncData<Array<IProduct>>;
  wishlistItem: IProduct | undefined;
}
