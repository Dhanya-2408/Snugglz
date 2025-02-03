import React, { ReactNode } from "react";
import { IProduct } from "../../../redux/slices/collection/collection.type";
import { Price } from "../../../ui_kits/global/Price.styles";
import { IF } from "../../../ui_kits/IF";
import { getOfferPrice } from "../../../utils/generics";
import { isEmpty } from "../../../utils/script";
import Sizechart from "../../../assets/images/sizechart.png";
import { ProductVariantsForm } from "./ProductVariantsForm";

interface IProps {
  product: IProduct;
  toggleSizeChart: () => void;
  toggleCartDraw: () => void;
}

export const PurchaseColumn: React.FC<IProps> = (props: IProps) => {
  const { product, toggleSizeChart, toggleCartDraw } = props;
  const { name, price, offer } = product;

  return (
    <div className="ProductPurchase">

      <div className="ProductMeta">
        <h4 className="Heading">{name}</h4>
        <div className="ProductMeta__PriceList Heading u-h5">
          <Price highlight>Rs. {price}</Price>
          <IF condition={!isEmpty(offer)}>
            <Price compareAt isLarge>
              Rs.{getOfferPrice(price, offer)}
            </Price>
          </IF>
        </div>
      </div>

      <div className="ProductInfo u-h5">
        <ProductVariantsForm product={product} toggleCartDraw={toggleCartDraw}>
          <div className="ProductForm__LabelLink " onClick={toggleSizeChart}>
            <img src={Sizechart} alt="SizeChart" />
            <span className="Link Link--primary">Size Guide</span>
          </div>
        </ProductVariantsForm>
      </div>
    </div>
  );
};
