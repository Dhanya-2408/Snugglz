import { ProductInfo } from "./ProductInfo";
import { ProductImage } from "./ProductImage";
import { IProduct } from "../../redux/slices/collection/collection.type";
import { AddFavIcon } from "../../assets/icons/AddFav.icon";
import { IF } from "../../ui_kits/IF";
import { useWishlistHook } from "../Wishlist/useWishlist.hook";

interface IProps {
  product: IProduct;
  label?: string;
  isVisibleFav?: boolean;
}

export const ProductItem = (props: IProps) => {
  const { product, label, isVisibleFav = true } = props;

  const { addToFav } = useWishlistHook();

  return (
    <div className="ProductItem" id={product.name}>
      <div className="ProductItem__Wrapper">
        <ProductImage product={product} />
        <IF condition={label !== undefined}>
          <div className="ProductItem__LabelList">
            <span className="ProductItem__Label Heading Text--subdued u-h7">
              {label}
            </span>
          </div>
        </IF>
        <IF condition={isVisibleFav}>
          <button
            className="ProductItem__Icon ProductItem__FavIcon Text--subdued"
            onClick={() => addToFav(product.productid)}
          >
            <AddFavIcon />
          </button>
        </IF>
        <ProductInfo product={product} />
      </div>
    </div>
  );
};
