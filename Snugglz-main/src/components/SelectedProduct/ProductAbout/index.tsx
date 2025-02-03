import React from "react";
import { IF } from "../../../ui_kits/IF";
import { isEmpty } from "../../../utils/script";
import { IProduct } from "../../../redux/slices/collection/collection.type";
import { Specification } from "./Specification";

interface IProps {
  product: IProduct;
}

export const ProductAbout: React.FC<IProps> = (props: IProps) => {
  const { description, productSpecification } = props.product;

  return (
    <div className="ProductMeta">
      <div className="Product__Description u-h5">{description}</div>
      <IF condition={!isEmpty(productSpecification)}>
        <Specification productSpecification={productSpecification} />
      </IF>
    </div>
  );
};
