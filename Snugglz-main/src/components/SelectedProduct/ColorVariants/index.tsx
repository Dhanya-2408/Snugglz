import React from "react";

import { IProduct } from "../../../redux/slices/collection/collection.type";
import { isEmpty } from "../../../utils/script";
import { IF } from "../../../ui_kits/IF";
import { useAppSelector } from "../../../redux/store";
import { productVariants } from "../../../redux/slices/product/product.selector";
import { IProductVariants } from "../../../redux/slices/product/product.type";
import { groupedProducts } from "../../../redux/slices/collection/collection.selector";
import { ImageSwatch } from "../../../ui_kits/ImageSwatch/ImageSwatch";
import { pick } from "../../../utils/generics";
import { useNavigate } from "react-router-dom";
import { encodeUrl } from "../../../utils/textHandler";
import { OptionsWrapper } from "../PurchaseColumn/OptionsWrapper";

export const ColorVariants: React.FC = () => {
  const groupedList = useAppSelector(groupedProducts) || [];
  const navigate = useNavigate();
  const handleColorChange = (item: any) => {
    navigate(`/product/${encodeUrl(item.name)}/${item.productid}`);
  };

  return (
    <IF condition={!isEmpty(groupedList)}>
      <OptionsWrapper name="Available Color">
        <ImageSwatch
          isLarge
          title="productColor"
          options={groupedList.map((item: IProduct) => {
            return pick(item, ["productid", "name", "image"]);
          })}
          onChange={handleColorChange}
        />
      </OptionsWrapper>
    </IF>
  );
};
