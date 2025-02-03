import { useAuth } from "../../contexts/AuthContext";
import { customer } from "../../redux/slices/profile/profile.selector";
import {
  addFavAsync,
  getFavAsync,
} from "../../redux/slices/wishlist/wishlist.reducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import toastMessage from "../../utils/toastMessage";

export const useWishlistHook = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector(customer);

  const addToFav = async (productid: number) => {
    if (user) {
      const response = await dispatch(
        addFavAsync({ productid, customerid: data?.customerid })
      );
      if (response) {
        dispatch(getFavAsync({ customerid: data?.customerid }));
      }
    } else {
      toastMessage("Login", "info");
    }
  };

  return { addToFav };
};
