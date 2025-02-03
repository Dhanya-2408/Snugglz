import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { navSlice } from "./slices/nav/nav.slice";
import { cartSlice } from "./slices/cart/cart.slice";
import { addressSlice } from "./slices/address/address.slice";
import { collectionSlice } from "./slices/collection/collection.slice";
import { wishlistSlice } from "./slices/wishlist/wishlist.slice";
import { homeSlice } from "./slices/home/home.slice";
import { productSlice } from "./slices/product/product.slice";
import { profileSlice } from "./slices/profile/profile.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [cartSlice.name, addressSlice.name],
  // blacklist: ["modal"],
};

const rootReducer = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
  [collectionSlice.name]: collectionSlice.reducer,
  [addressSlice.name]: addressSlice.reducer,
  [wishlistSlice.name]: wishlistSlice.reducer,
  [navSlice.name]: navSlice.reducer,
  [homeSlice.name]: homeSlice.reducer,
  [productSlice.name]: productSlice.reducer,
  [profileSlice.name]: profileSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
