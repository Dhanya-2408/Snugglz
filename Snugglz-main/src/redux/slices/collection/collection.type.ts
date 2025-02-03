import { AsyncData } from "../../../models/types";

export interface IProductImage {
  id: number;
  productimageid: number;
  image: string;
  productid: number;
}

export interface IProductSize {
  id: number;
  productsizeid: number;
  size: string;
  stock: number;
  productid: number;
}

export interface IProductSpecification {
  id: number;
  productspecid: number;
  productspecification: string;
  productid: number;
}

export interface IProductReview {
  description: string;
  imageUrl: string;
  rating: number;
  rid: number;
  titile: string;
  userid: number;
  username: string;
}

export interface IProduct {
  id: number;
  collection: string;
  color: string;
  description: string;
  gender: string;
  group: string;
  date: string;
  image: string;
  maincategory: string;
  metatags: string | null;
  occation: string | null;
  name: string;
  offer: number;
  points: number;
  price: number;
  productImages: IProductImage[] | null;
  productSize: IProductSize[] | null;
  productSpecification: IProductSpecification[] | null;
  productid: number;
  reviews: IProductReview[];
  sizechart: string | null;
  sku: string;
  subcategory: string;
  type: string;
}

export enum LayoutType {
  Single = "1:1",
  Dual = "2:2",
  Multi = "4:4",
}

export default interface ISortData<T> {
  key: string;
  field: keyof T;
  isDescending: boolean;
}

export type ISortCollection = ISortData<IProduct>;

export type FilterData = {
  id: string;
  title: string;
  url?: string;
};

export type FilterKeys = "color" | "price" | "size" | "occasion";

export type FilterDataType = Record<FilterKeys, Array<FilterData>>;

export interface ISelectedFilters {
  color: string[];
  price: string;
  size: string[];
  // discount: string;
  occasion: string[];
}

export interface ICollectionState {
  layoutType: LayoutType;
  isSortEnabled: boolean;
  isFilterEnabled: boolean;
  selectedSorter: ISortCollection | undefined;
  selectedFilters: ISelectedFilters | undefined;
  allProducts: AsyncData<IProduct[]>;
  groupedProducts: IProduct[] | undefined;
}
