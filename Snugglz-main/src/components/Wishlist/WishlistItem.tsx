import { FC } from "react";
import { useState } from "react";
import { AddToCartIcon } from "../../assets/icons/AddToCart.icon";
import RemoveIcon from "../../assets/icons/Remove.icon";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { ProductInfo } from "../ProductItem/ProductInfo";
import { useWishlistHook } from "./useWishlist.hook";

interface IProps {
  product: IProduct;
  toggleFavOpen: (product: IProduct | undefined) => void;
}

export const WishlistItem: FC<IProps> = (props: IProps) => {
  const { product, toggleFavOpen } = props;

  const { addToFav } = useWishlistHook();

  const [loader, setLoader] = useState("Image--lazyLoading");

  const onImageLoaded = () => {
    setLoader("Image--lazyLoaded");
  };

  return (
    <div className="ProductItem">
      <div className="ProductItem__Wrapper">
        <div className="ProductItem__ImageWrapper">
          <div className="AspectRatio AspectRatio--tall">
            <img
              src={product.image}
              alt={product.name}
              onLoad={onImageLoaded}
              className={`ProductItem__Image Image--fadeIn ${loader}`}
            />
            <span className="Image__Loader"></span>
            <button
              className="ProductItem__Icon ProductItem__RemoveIcon"
              onClick={() => {
                addToFav(product.productid);
              }}
            >
              <RemoveIcon />
            </button>
            <button
              className="ProductItem__Icon ProductItem__CartIcon"
              onClick={() => toggleFavOpen(product)}
            >
              <AddToCartIcon />
            </button>
          </div>
        </div>
        <ProductInfo product={product} />
      </div>
    </div>
  );
};
