import ISortData, { IProduct } from "../redux/slices/collection/collection.type";

export const ProductView = {
  "4:4": {
    "data-desktop-count": 4,
    "data-mobile-count": 2,
    class: "Grid__Cell 1/2--phone 1/3--tablet-and-up  1/4--desk",
  },
  "2:2": {
    "data-desktop-count": 3,
    "data-mobile-count": 2,
    class: "Grid__Cell 1/2--phone  1/2--tablet-and-up 1/3--desk",
  },
  "1:1": {
    "data-desktop-count": 4,
    "data-mobile-count": 1,
    class: "Grid__Cell 1/1--phone 1/3--tablet-and-up 1/4--desk",
  },
};

export const SortList: ISortData<IProduct>[] = [
  {
    key: "Featured",
    field: "offer",
    isDescending: false,
  },
  // {
  //   key: "Best selling",
  //   field: "",
  //   isDescending: false,
  // },
  {
    key: "Date, new to old",
    field: "date",
    isDescending: false,
  },
  {
    key: "Date, old to new",
    field: "date",
    isDescending: true,
  },
  {
    key: "Price, high to low",
    field: "price",
    isDescending: true,
  },
  {
    key: "Price, low to high",
    field: "price",
    isDescending: false,
  },
  {
    key: "Alphabetically, A-Z",
    field: "name",
    isDescending: false,
  },
  {
    key: "Alphabetically, Z-A",
    field: "name",
    isDescending: true,
  },
];

export const initialAsyncData = {
  loading: false,
  error: null,
  data: null,
};

export const initialFormState = {
  errors: {},
  helperText: "",
  submitSuccess: false,
  isButtonLoading: false,
};
