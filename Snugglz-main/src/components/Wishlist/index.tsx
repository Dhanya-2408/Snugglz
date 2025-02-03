import { Fragment } from "react";
import LazyLoad from "../LazyComponent";
import { WishlistItem } from "./WishlistItem";
import { BreadCrumb } from "../../ui_kits/BreadCrumb";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  isFavAddCartOpen,
  wishlistItem,
  wishlistItems,
} from "../../redux/slices/wishlist/wishlist.selector";
import { AddFavModal } from "./AddFavModal";
import { isEmpty } from "../../utils/script";
import { IF } from "../../ui_kits/IF";
import {
  addFavToCartOpen,
  setWishlistItem,
} from "../../redux/slices/wishlist/wishlist.slice";

export const Wishlist = () => {
  const { data: productData } = useAppSelector(wishlistItems);
  const isFavAddOpen = useAppSelector(isFavAddCartOpen);
  const favItem = useAppSelector(wishlistItem);

  const dispatch = useAppDispatch();

  const toggleFavOpen = (product?: IProduct) => {
    dispatch(addFavToCartOpen(!isFavAddOpen));
    dispatch(setWishlistItem(product));
  };

  return (
    <Fragment>
      <BreadCrumb path={["Wishlist"]} />
      <IF condition={!isEmpty(favItem)}>
        <AddFavModal
          product={favItem as IProduct}
          isHidden={!isFavAddOpen}
          toggleFavOpen={toggleFavOpen}
        />
      </IF>
      <div className="CollectionInner">
        <div className="CollectionInner__Products">
          <div
            className="ProductList--grid ProductList--removeMargin Grid"
            data-mobile-count={2}
            data-desktop-count={4}
          >
            {productData &&
              productData.map((product: IProduct) => (
                <LazyLoad
                  tag="div"
                  key={product.id}
                  className="Grid__Cell 1/2--phone 1/3--tablet-and-up 1/4--desk"
                >
                  <WishlistItem
                    product={product}
                    toggleFavOpen={toggleFavOpen}
                  />
                </LazyLoad>
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
