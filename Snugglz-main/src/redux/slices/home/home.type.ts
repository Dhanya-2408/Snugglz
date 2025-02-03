import { AsyncData } from "../../../models/types";
import { IProduct } from "../collection/collection.type";

export enum CollectionEnum {
  MEN = "MEN",
  WOMEN = "WOMEN",
}

export enum ProductsEnum {
  SALE = "selling",
  FEATURE = "feature",
  TRENDING = "trending",
}

export interface ICollection {
  collection: string;
  id: number;
  url: string;
  type: CollectionEnum;
}

export interface IHomeState {
  collection: AsyncData<ICollection[]>;
  productCollection: AsyncData<Record<ProductsEnum, Array<IProduct>>>;
}
