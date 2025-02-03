import { AsyncData } from "../../../models/types";
import { IProduct } from "../collection/collection.type";

export interface IProductVariants {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export interface IProductState {
  isVisibleSizechart: boolean;
  selectedProduct: AsyncData<IProduct>;
  productVariants: IProductVariants | undefined;
  isReviewEnabled: boolean;
}
