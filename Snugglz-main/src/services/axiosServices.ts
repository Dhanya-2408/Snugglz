import {
  authEndpoints,
  FavEndpoints,
  homeEndpoints,
  navEndpoints,
  productsEndpoints,
  profileEndpoints,
} from "./axiosEndpoints";

export const authService = {
  Register: {
    method: "POST",
    url: authEndpoints.REGISTER,
  },
  Login: {
    method: "POST",
    url: authEndpoints.LOGIN,
  },
  ForgorPassword: {
    method: "POST",
    url: authEndpoints.FORGOT_PASSWORD,
  },
  ConfirmOtp: {
    method: "POST",
    url: authEndpoints.CONFIRM__OTP,
  },
  ResetPassword: {
    method: "PUT",
    url: authEndpoints.RESET_PASSWORD,
  },
};

export const navService = {
  Maincategory: {
    method: "GET",
    url: navEndpoints.MAIN__CATEGORY,
  },
};

export const homeService = {
  Collection: {
    method: "GET",
    url: homeEndpoints.COLLECTION,
  },
  getHomeProducts: {
    method: "GET",
    url: homeEndpoints.HOMESCREEN_PRODUCTS,
  },
  HomeScreen: {
    method: "GET",
    url: homeEndpoints.HOMESCREEN,
  },
};

export const productService = {
  Products: {
    method: "GET",
    url: productsEndpoints.PRODUCTS,
  },
  productsByCategory: {
    method: "GET",
    url: productsEndpoints.PROUCTS_By_CATEGORY,
  },
  addReviews: {
    method: "POST",
    url: productsEndpoints.ADD_REVIEWS,
  },
  
};

export const favService = {
  addFavourites: {
    method: "POST",
    url: FavEndpoints.ADD_FAV,
  },
  getFavourites: {
    method: "POST",
    url: FavEndpoints.GET_FAV,
  },
};

export const profileService = {
  getCustomerbyIdEmail: {
    method: "GET",
    url: profileEndpoints.PROFILE,
  },
  updateCustomer: {
    method: "PUT",
    url: profileEndpoints.UPDATE_PROFILE,
  },
};
