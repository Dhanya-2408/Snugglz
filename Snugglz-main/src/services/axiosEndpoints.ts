export const authEndpoints = Object.freeze({
  REGISTER: "/render/user/registration",
  LOGIN: "/render/user/login",
  FORGOT_PASSWORD: "/render/user/forgot/password",
  CONFIRM__OTP: "/render/user/confirm/otp",
  RESET_PASSWORD: "/render/user/update/password",
});

export const navEndpoints = Object.freeze({
  MAIN__CATEGORY: "/render/get/maincategory",
});

export const profileEndpoints = Object.freeze({
  PROFILE: "/render/user/email",
  UPDATE_PROFILE: "/render/user/update",
});

export const homeEndpoints = Object.freeze({
  COLLECTION: "/render/homescreen/collection/type",
  HOMESCREEN_PRODUCTS: "/render/homescreen/collection",
  HOMESCREEN: "/render/homescreen",
});

export const productsEndpoints = Object.freeze({
  PRODUCTS: "/render/get/products",
  PROUCTS_By_CATEGORY: "/render/get/products/category",
  ADD_REVIEWS: "/render/add/reviews",
});

export const FavEndpoints = Object.freeze({
  ADD_FAV: "/render/add/favourites",
  GET_FAV: "/render/get/favorites",
});
