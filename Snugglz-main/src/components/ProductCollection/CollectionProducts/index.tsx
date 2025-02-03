import { FC } from "react";
import LazyLoad from "../../LazyComponent";
import { ProductView } from "../../../models/constants";
import { ProductItem } from "../../ProductItem/ProductItem";
import {
  IProduct,
  LayoutType,
} from "../../../redux/slices/collection/collection.type";

interface IProps {
  layoutType: LayoutType;
  ProductData: IProduct[] | null;
}

export const CollectionProducts: FC<IProps> = (props: IProps) => {
  const { layoutType, ProductData } = props;
  const selectedView = ProductView[layoutType];

  return (
    <div className="CollectionInner__Products">
      <div
        className="ProductList--grid ProductList--removeMargin Grid"
        data-mobile-count={selectedView["data-mobile-count"]}
        data-desktop-count={selectedView["data-desktop-count"]}
      >
        {ProductData &&
          ProductData.map((product: IProduct) => (
            <LazyLoad tag="div" key={product.id} className={selectedView.class}>
              <ProductItem product={product} label={`${product.offer}% OFF`} />
            </LazyLoad>
          ))}
      </div>
    </div>
  );
};
